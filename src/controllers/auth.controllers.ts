import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { randomUUID } from "crypto";
import prisma from "../config/prisma.js";
import { userCreateSchema } from "../validators/schema.validators.js";

const refreshTokens = new Map<string, string>();

function jwtSecret() {
  return process.env.JWT_SECRET ?? "test-secret";
}

function signAccessToken(user: {
  id: string;
  email: string;
  role: string;
  verificationStatus: string;
}) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
      verificationStatus: user.verificationStatus,
    },
    jwtSecret(),
    { expiresIn: "15m" },
  );
}

function issueTokens(user: {
  id: string;
  email: string;
  role: string;
  verificationStatus: string;
}) {
  const accessToken = signAccessToken(user);
  const refreshToken = randomUUID();
  refreshTokens.set(refreshToken, user.id);
  return { accessToken, refreshToken };
}

export async function register(req: Request, res: Response) {
  try {
    const parsed = userCreateSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: parsed.error.format() });

    const existing = await prisma.user.findUnique({
      where: { email: parsed.data.email },
    });
    if (existing) return res.status(409).json({ error: "EMAIL_ALREADY_REGISTERED" });

    const password = await bcrypt.hash(parsed.data.password, 10);
    const user = await prisma.user.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        password,
        role: parsed.data.role,
        profileImage: parsed.data.profileImage ?? null,
        verificationStatus: "PENDING",
      },
    });

    const { password: _password, ...safeUser } = user;
    return res.status(201).json({ user: safeUser });
  } catch (e) {
    return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

export async function verify(req: Request, res: Response) {
  try {
    const { email, userId } = req.body ?? {};
    if (!email && !userId) return res.status(400).json({ error: "VERIFICATION_TARGET_REQUIRED" });

    const user = await prisma.user.update({
      where: email ? { email: String(email) } : { id: String(userId) },
      data: { verificationStatus: "VERIFIED" },
    });

    const { password: _password, ...safeUser } = user;
    return res.json({ user: safeUser });
  } catch (e) {
    return res.status(404).json({ error: "USER_NOT_FOUND" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body ?? {};
    if (!email || !password) return res.status(400).json({ error: "EMAIL_AND_PASSWORD_REQUIRED" });

    const user = await prisma.user.findUnique({ where: { email: String(email) } });
    if (!user) return res.status(401).json({ error: "INVALID_CREDENTIALS" });

    const valid = await bcrypt.compare(String(password), user.password);
    if (!valid) return res.status(401).json({ error: "INVALID_CREDENTIALS" });

    return res.json(issueTokens(user));
  } catch (e) {
    return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

export async function refresh(req: Request, res: Response) {
  try {
    const { refreshToken } = req.body ?? {};
    if (!refreshToken) return res.status(400).json({ error: "REFRESH_TOKEN_REQUIRED" });

    const userId = refreshTokens.get(String(refreshToken));
    if (!userId) return res.status(401).json({ error: "INVALID_REFRESH_TOKEN" });

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(401).json({ error: "INVALID_REFRESH_TOKEN" });

    return res.json(issueTokens(user));
  } catch (e) {
    return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

export async function logout(req: Request, res: Response) {
  const { refreshToken } = req.body ?? {};
  if (refreshToken) refreshTokens.delete(String(refreshToken));
  return res.status(204).send();
}

export default {
  register,
  verify,
  login,
  refresh,
  logout,
};
