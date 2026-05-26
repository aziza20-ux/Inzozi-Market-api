"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.verify = verify;
exports.login = login;
exports.refresh = refresh;
exports.logout = logout;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = require("crypto");
const prisma_js_1 = __importDefault(require("../config/prisma.js"));
const schema_validators_js_1 = require("../validators/schema.validators.js");
const refreshTokens = new Map();
function jwtSecret() {
    return process.env.JWT_SECRET ?? "test-secret";
}
function signAccessToken(user) {
    return jsonwebtoken_1.default.sign({
        id: user.id,
        email: user.email,
        role: user.role,
        verificationStatus: user.verificationStatus,
    }, jwtSecret(), { expiresIn: "15m" });
}
function issueTokens(user) {
    const accessToken = signAccessToken(user);
    const refreshToken = (0, crypto_1.randomUUID)();
    refreshTokens.set(refreshToken, user.id);
    return { accessToken, refreshToken };
}
async function register(req, res) {
    try {
        const parsed = schema_validators_js_1.userCreateSchema.safeParse(req.body);
        if (!parsed.success)
            return res.status(400).json({ error: parsed.error.format() });
        const existing = await prisma_js_1.default.user.findUnique({
            where: { email: parsed.data.email },
        });
        if (existing)
            return res.status(409).json({ error: "EMAIL_ALREADY_REGISTERED" });
        const password = await bcrypt_1.default.hash(parsed.data.password, 10);
        const user = await prisma_js_1.default.user.create({
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
    }
    catch (e) {
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function verify(req, res) {
    try {
        const { email, userId } = req.body ?? {};
        if (!email && !userId)
            return res.status(400).json({ error: "VERIFICATION_TARGET_REQUIRED" });
        const user = await prisma_js_1.default.user.update({
            where: email ? { email: String(email) } : { id: String(userId) },
            data: { verificationStatus: "VERIFIED" },
        });
        const { password: _password, ...safeUser } = user;
        return res.json({ user: safeUser });
    }
    catch (e) {
        return res.status(404).json({ error: "USER_NOT_FOUND" });
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body ?? {};
        if (!email || !password)
            return res.status(400).json({ error: "EMAIL_AND_PASSWORD_REQUIRED" });
        const user = await prisma_js_1.default.user.findUnique({ where: { email: String(email) } });
        if (!user)
            return res.status(401).json({ error: "INVALID_CREDENTIALS" });
        const valid = await bcrypt_1.default.compare(String(password), user.password);
        if (!valid)
            return res.status(401).json({ error: "INVALID_CREDENTIALS" });
        return res.json(issueTokens(user));
    }
    catch (e) {
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function refresh(req, res) {
    try {
        const { refreshToken } = req.body ?? {};
        if (!refreshToken)
            return res.status(400).json({ error: "REFRESH_TOKEN_REQUIRED" });
        const userId = refreshTokens.get(String(refreshToken));
        if (!userId)
            return res.status(401).json({ error: "INVALID_REFRESH_TOKEN" });
        const user = await prisma_js_1.default.user.findUnique({ where: { id: userId } });
        if (!user)
            return res.status(401).json({ error: "INVALID_REFRESH_TOKEN" });
        return res.json(issueTokens(user));
    }
    catch (e) {
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function logout(req, res) {
    const { refreshToken } = req.body ?? {};
    if (refreshToken)
        refreshTokens.delete(String(refreshToken));
    return res.status(204).send();
}
exports.default = {
    register,
    verify,
    login,
    refresh,
    logout,
};
