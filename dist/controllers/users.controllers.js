"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersStats = exports.getUserMessages = exports.getUserCampaigns = exports.getUserContents = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const schema_validators_1 = require("../validators/schema.validators");
const parsePositiveInteger = (value, defaultValue = 1) => {
    if (value === undefined)
        return defaultValue;
    const parsed = Number.parseInt(String(value), 10);
    if (Number.isNaN(parsed) || parsed < 1)
        return defaultValue;
    return parsed;
};
const getUsers = async (req, res) => {
    const page = parsePositiveInteger(req.query.page, 1);
    const limit = parsePositiveInteger(req.query.limit, 10);
    const skip = (page - 1) * limit;
    const [total, users] = await Promise.all([
        prisma_1.default.user.count(),
        prisma_1.default.user.findMany({
            skip,
            take: limit,
            select: {
                id: true,
                name: true,
                email: true,
                profileImage: true,
                role: true,
                verificationStatus: true,
                createdAt: true,
                updatedAt: true,
                _count: { select: { contents: true, campaigns: true } },
            },
            orderBy: { createdAt: "desc" },
        }),
    ]);
    res.status(200).json({
        data: users,
        meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
};
exports.getUsers = getUsers;
const getUserById = async (req, res) => {
    const id = String(req.params.id);
    const user = await prisma_1.default.user.findUnique({
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
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    const parsed = schema_validators_1.userCreateSchema.safeParse(req.body);
    if (!parsed.success) {
        res.status(400).json({ error: parsed.error.format() });
        return;
    }
    const payload = parsed.data;
    const existing = await prisma_1.default.user.findUnique({
        where: { email: payload.email },
    });
    if (existing) {
        res.status(409).json({ error: "User with this email already exists" });
        return;
    }
    const created = await prisma_1.default.user.create({
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
exports.createUser = createUser;
const updateUser = async (req, res) => {
    const id = String(req.params.id);
    const existing = await prisma_1.default.user.findUnique({ where: { id } });
    if (!existing) {
        res.status(404).json({ error: "User not found" });
        return;
    }
    const data = {};
    const { name, email, password, profileImage, role, verificationStatus } = req.body;
    if (name !== undefined)
        data.name = name;
    if (email !== undefined)
        data.email = email;
    if (password !== undefined)
        data.password = password;
    if (profileImage !== undefined)
        data.profileImage = profileImage;
    if (role !== undefined)
        data.role = role;
    if (verificationStatus !== undefined)
        data.verificationStatus = verificationStatus;
    const updated = await prisma_1.default.user.update({ where: { id }, data });
    const { password: _pwd, ...safeUser } = updated;
    res.status(200).json({ data: safeUser });
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const id = String(req.params.id);
    const existing = await prisma_1.default.user.findUnique({ where: { id } });
    if (!existing) {
        res.status(404).json({ error: "User not found" });
        return;
    }
    await prisma_1.default.user.delete({ where: { id } });
    res.status(200).json({ data: { id }, message: "user deleted successfully" });
};
exports.deleteUser = deleteUser;
const getUserContents = async (req, res) => {
    const id = String(req.params.id);
    const page = parsePositiveInteger(req.query.page, 1);
    const limit = parsePositiveInteger(req.query.limit, 10);
    const skip = (page - 1) * limit;
    const [total, contents] = await Promise.all([
        prisma_1.default.content.count({ where: { creatorId: id } }),
        prisma_1.default.content.findMany({
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
exports.getUserContents = getUserContents;
const getUserCampaigns = async (req, res) => {
    const id = String(req.params.id);
    const campaigns = await prisma_1.default.campaign.findMany({
        where: { businessId: id },
        orderBy: { startDate: "desc" },
    });
    res.status(200).json({ data: campaigns });
};
exports.getUserCampaigns = getUserCampaigns;
const getUserMessages = async (req, res) => {
    const id = String(req.params.id);
    const messages = await prisma_1.default.message.findMany({
        where: { OR: [{ senderId: id }, { receiverId: id }] },
        orderBy: { createdAt: "desc" },
    });
    res.status(200).json({ data: messages });
};
exports.getUserMessages = getUserMessages;
const usersStats = async (req, res) => {
    const [totalUsers, roleGroups] = await Promise.all([
        prisma_1.default.user.count(),
        prisma_1.default.user.groupBy({ by: ["role"], _count: { role: true } }),
    ]);
    const byRole = roleGroups.reduce((acc, g) => {
        acc[g.role] = g._count.role;
        return acc;
    }, {});
    res.status(200).json({ data: { totalUsers, byRole } });
};
exports.usersStats = usersStats;
exports.default = {
    getUsers: exports.getUsers,
    getUserById: exports.getUserById,
    createUser: exports.createUser,
    updateUser: exports.updateUser,
    deleteUser: exports.deleteUser,
    getUserContents: exports.getUserContents,
    getUserCampaigns: exports.getUserCampaigns,
    getUserMessages: exports.getUserMessages,
    usersStats: exports.usersStats,
};
