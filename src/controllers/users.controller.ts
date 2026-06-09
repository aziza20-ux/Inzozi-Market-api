import type { Request, Response } from "express";
import type { File as MulterFile } from "multer";
import prisma from "../config/prisma";
import { uploadToCloudinary } from "../config/cloudinary";
import type { AuthRequest } from "../middleware/auth";
import { userCreateSchema } from "../validators/schema.validators";

const parsePositiveInteger = (value: unknown, defaultValue = 1): number => {
  if (value === undefined) return defaultValue;
  const parsed = Number.parseInt(String(value), 10);
  if (Number.isNaN(parsed) || parsed < 1) return defaultValue;
  return parsed;
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const page = parsePositiveInteger(req.query.page, 1);
  const limit = parsePositiveInteger(req.query.limit, 10);
  const skip = (page - 1) * limit;

  const [total, users] = await Promise.all([
    prisma.user.count(),
    prisma.user.findMany({
      skip,
      take: limit,
      select: {
        id: true,
        name: true,
        email: true,
        profileImage: true,
        role: true,
        verificationStatus: true,
        creatorProfile: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            contents: true,
            campaigns: true,
            creatorSubscriptions: {
              where: { status: "ACTIVE", endDate: { gt: new Date() } },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  res.status(200).json({
    data: users,
    meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
  });
};

export const getUserById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = String(req.params.id);

  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      creatorProfile: true,
      contents: true,
      campaigns: true,
      paymentTransactions: true,
      sentMessages: true,
      receivedMessages: true,
    },
  });

  if (!user) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  // never return password
  // prisma client includes password field by default; remove it if present
  // (we selected include above so password will still be present on top-level fields)
  // convert to plain object and delete password
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...safeUser } = user;

  res.status(200).json({ data: safeUser });
};

export const createUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const parsed = userCreateSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.format() });
    return;
  }

  const payload = parsed.data;

  const existing = await prisma.user.findUnique({
    where: { email: payload.email },
  });
  if (existing) {
    res.status(409).json({ error: "User with this email already exists" });
    return;
  }

  const created = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: payload.password,
      profileImage: payload.profileImage ?? null,
      role: payload.role,
      verificationStatus: payload.verificationStatus ?? "PENDING",
    },
  });

  const { password, ...safeUser } = created;
  res.status(201).json({ data: safeUser });
};

export const updateUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = String(req.params.id);
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  const data: Record<string, unknown> = {};
  const { name, email, password, profileImage, role, verificationStatus } =
    req.body;
  if (name !== undefined) data.name = name;
  if (email !== undefined) data.email = email;
  if (password !== undefined) data.password = password;
  if (profileImage !== undefined) data.profileImage = profileImage;
  if (role !== undefined) data.role = role;
  if (verificationStatus !== undefined)
    data.verificationStatus = verificationStatus;

  const updated = await prisma.user.update({ where: { id }, data });
  const { password: _pwd, ...safeUser } = updated;
  res.status(200).json({ data: safeUser });
};

export const uploadMyProfileImage = async (
  req: AuthRequest & { file?: MulterFile },
  res: Response,
): Promise<void> => {
  if (!req.userId) {
    res.status(401).json({ error: "UNAUTHORIZED" });
    return;
  }

  if (!req.file) {
    res.status(400).json({ error: "NO_PROFILE_IMAGE_UPLOADED" });
    return;
  }

  try {
    const uploaded = await uploadToCloudinary(
      req.file.buffer,
      "inzozi/profile-images",
    );

    const updated = await prisma.user.update({
      where: { id: req.userId },
      data: { profileImage: uploaded.url },
      select: {
        id: true,
        name: true,
        email: true,
        profileImage: true,
        role: true,
        verificationStatus: true,
        updatedAt: true,
      },
    });

    res.status(200).json({
      data: updated,
      profileImage: uploaded.url,
      publicId: uploaded.publicId,
    });
  } catch (e) {
    console.error("uploadMyProfileImage error:", e);
    res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = String(req.params.id);
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) {
    res.status(404).json({ error: "User not found" });
    return;
  }

  await prisma.user.delete({ where: { id } });
  res.status(200).json({ data: { id }, message: "user deleted successfully" });
};

export const getUserContents = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = String(req.params.id);

  const page = parsePositiveInteger(req.query.page, 1);
  const limit = parsePositiveInteger(req.query.limit, 10);
  const skip = (page - 1) * limit;

  const [total, contents] = await Promise.all([
    prisma.content.count({ where: { creatorId: id } }),
    prisma.content.findMany({
      where: { creatorId: id },
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    }),
  ]);

  res.status(200).json({
    data: contents,
    meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
  });
};

export const getUserCampaigns = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = String(req.params.id);

  const campaigns = await prisma.campaign.findMany({
    where: { businessId: id },
    include: {
      applications: {
        include: {
          creator: true
        }
      },
      business: true
    },
    orderBy: { startDate: "desc" },
  });
  res.status(200).json({ data: campaigns });
};

export const getUserMessages = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const id = String(req.params.id);
  const messages = await prisma.message.findMany({
    where: { OR: [{ senderId: id }, { receiverId: id }] },
    orderBy: { createdAt: "desc" },
  });
  res.status(200).json({ data: messages });
};

export const usersStats = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const [totalUsers, roleGroups] = await Promise.all([
    prisma.user.count(),
    prisma.user.groupBy({ by: ["role"], _count: { role: true } }),
  ]);

  const byRole = roleGroups.reduce(
    (acc, g) => {
      acc[g.role] = g._count.role;
      return acc;
    },
    {} as Record<string, number>,
  );

  res.status(200).json({ data: { totalUsers, byRole } });
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  uploadMyProfileImage,
  deleteUser,
  getUserContents,
  getUserCampaigns,
  getUserMessages,
  usersStats,
};
