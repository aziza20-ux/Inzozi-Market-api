"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateContentUploadUrl = generateContentUploadUrl;
exports.createContent = createContent;
exports.getContentList = getContentList;
exports.getContent = getContent;
exports.patchContent = patchContent;
exports.deleteContent = deleteContent;
exports.moderationUpdate = moderationUpdate;
exports.getCreatorProfileContent = getCreatorProfileContent;
const prisma_js_1 = __importDefault(require("../config/prisma.js"));
const storage_service_js_1 = require("../services/storage.service.js");
const cloudinary_js_1 = require("../config/cloudinary.js");
async function hasCompletedPremiumPurchase(userId, contentId) {
    const purchase = await prisma_js_1.default.premiumPurchase.findFirst({
        where: {
            userId,
            contentId,
            status: { in: ["SUCCESS", "COMPLETED", "paid", "completed"] },
        },
    });
    return !!purchase;
}
function isPaidContent(contentVisibility) {
    return contentVisibility === "paid";
}
function getMediaUrl(body) {
    return body?.media_url ?? body?.mediaUrl ?? body?.contentUrl;
}
async function resolveContentMedia(req) {
    const file = req.file;
    if (file) {
        const resourceType = file.mimetype.startsWith("video/") ? "video" : "auto";
        const uploaded = await (0, cloudinary_js_1.uploadToCloudinary)(file.buffer, "inzozi/content", resourceType);
        return uploaded.url;
    }
    return getMediaUrl(req.body);
}
async function generateContentUploadUrl(req, res) {
    try {
        const { filename, mimeType } = req.body ?? {};
        if (!filename || !mimeType) {
            return res.status(400).json({ error: "FILENAME_AND_MIME_TYPE_REQUIRED" });
        }
        const upload = await storage_service_js_1.storageService.generateUploadUrl(String(filename), String(mimeType));
        return res.status(201).json(upload);
    }
    catch (e) {
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function createContent(req, res) {
    try {
        const userId = req.userId;
        const role = req.role;
        if (!userId) {
            return res.status(401).json({ error: "UNAUTHORIZED" });
        }
        if (role !== "CREATOR") {
            return res.status(403).json({ error: "CREATOR_ONLY" });
        }
        const { title, description, contentUrl, thumbnailUrl, type, visibility, price, currency, } = req.body ?? {};
        const mediaUrl = await resolveContentMedia(req);
        if (!title || !mediaUrl || !type || !visibility) {
            return res.status(400).json({ error: "MISSING_REQUIRED_FIELDS" });
        }
        if (!storage_service_js_1.storageService.validatePublicUrl(String(mediaUrl))) {
            return res.status(400).json({ error: "INVALID_MEDIA_URL" });
        }
        if (visibility === "paid") {
            if (price === undefined ||
                currency === undefined ||
                currency === null ||
                currency === "") {
                return res.status(400).json({
                    error: "PAID_CONTENT_REQUIRES_PRICE_AND_CURRENCY",
                });
            }
        }
        const creatorProfile = await prisma_js_1.default.creatorProfile.findUnique({
            where: { userId },
        });
        const created = await prisma_js_1.default.content.create({
            data: {
                title,
                description: description ?? null,
                contentUrl: String(mediaUrl),
                thumbnailUrl: thumbnailUrl ?? null,
                type,
                visibility,
                price: visibility === "paid" ? Number(price) : null,
                currency: visibility === "paid" ? String(currency) : null,
                creatorId: userId,
                ...(creatorProfile ? { creatorProfileId: creatorProfile.id } : {}),
            },
        });
        res.status(201).json(created);
    }
    catch (e) {
        console.error("createContent error:", e);
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function getContentList(req, res) {
    try {
        const { type, visibility } = req.query;
        const where = { deletedAt: null };
        if (typeof type === "string")
            where.type = type;
        if (typeof visibility === "string")
            where.visibility = visibility;
        const list = await prisma_js_1.default.content.findMany({
            where,
            orderBy: { createdAt: "desc" },
        });
        res.json(list);
    }
    catch (e) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function getContent(req, res) {
    try {
        const { id } = req.params;
        if (!id || Array.isArray(id)) {
            return res.status(400).json({ error: "INVALID_CONTENT_ID" });
        }
        const content = await prisma_js_1.default.content.findFirst({
            where: { id: String(id), deletedAt: null },
        });
        if (!content) {
            return res.status(404).json({ error: "CONTENT_NOT_FOUND" });
        }
        // Public endpoint: no moderation gating configured.
        if (isPaidContent(content.visibility)) {
            // Requires completed premium purchase.
            const user = await prisma_js_1.default.user.findFirst({ where: { id: req.userId } });
            // If no user, deny.
            if (!user) {
                return res.status(403).json({ error: "CONTENT_ACCESS_DENIED" });
            }
            const ok = await hasCompletedPremiumPurchase(user.id, content.id);
            if (!ok) {
                return res.status(403).json({ error: "CONTENT_ACCESS_DENIED" });
            }
        }
        res.json(content);
    }
    catch (e) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function patchContent(req, res) {
    try {
        const userId = req.userId;
        const role = req.role;
        const { id } = req.params;
        if (!userId) {
            return res.status(401).json({ error: "UNAUTHORIZED" });
        }
        const content = await prisma_js_1.default.content.findFirst({
            where: { id: String(id), deletedAt: null },
        });
        if (!content)
            return res.status(404).json({ error: "CONTENT_NOT_FOUND" });
        if (content.creatorId !== userId && role !== "ADMIN") {
            return res.status(403).json({ error: "CONTENT_UPDATE_DENIED" });
        }
        const { title, description, contentUrl, thumbnailUrl, type, visibility, price, currency, } = req.body ?? {};
        const mediaUrl = await resolveContentMedia(req);
        if (mediaUrl !== undefined &&
            !storage_service_js_1.storageService.validatePublicUrl(String(mediaUrl))) {
            return res.status(400).json({ error: "INVALID_MEDIA_URL" });
        }
        if (visibility === "paid") {
            if (price === undefined ||
                currency === undefined ||
                currency === null ||
                currency === "") {
                return res.status(400).json({
                    error: "PAID_CONTENT_REQUIRES_PRICE_AND_CURRENCY",
                });
            }
        }
        const updated = await prisma_js_1.default.content.update({
            where: { id: String(id) },
            data: {
                ...(title !== undefined ? { title } : {}),
                ...(description !== undefined ? { description: description } : {}),
                ...(mediaUrl !== undefined ? { contentUrl: String(mediaUrl) } : {}),
                ...(thumbnailUrl !== undefined ? { thumbnailUrl } : {}),
                ...(type !== undefined ? { type } : {}),
                ...(visibility !== undefined ? { visibility } : {}),
                ...(price !== undefined
                    ? { price: visibility === "paid" ? Number(price) : null }
                    : {}),
                ...(currency !== undefined
                    ? { currency: visibility === "paid" ? String(currency) : null }
                    : {}),
            },
        });
        res.json(updated);
    }
    catch (e) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function deleteContent(req, res) {
    try {
        const user = await prisma_js_1.default.user.findFirst({ where: { id: req.userId } });
        const { id } = req.params;
        if (!user) {
            return res.status(401).json({ error: "UNAUTHORIZED" });
        }
        const content = await prisma_js_1.default.content.findFirst({
            where: { id: String(id), deletedAt: null },
        });
        if (!content)
            return res.status(404).json({ error: "CONTENT_NOT_FOUND" });
        if (content.creatorId !== user.id && user.role !== "ADMIN") {
            return res.status(403).json({ error: "CONTENT_DELETE_DENIED" });
        }
        await prisma_js_1.default.content.update({
            where: { id: String(id) },
            data: { deletedAt: new Date() },
        });
        res.status(204).json({ message: "deleted successfully", id: id });
    }
    catch (e) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function moderationUpdate(req, res) {
    // Moderation endpoint removed
    return res.status(404).json({ error: "NOT_FOUND" });
}
async function getCreatorProfileContent(req, res) {
    try {
        const { id } = req.params;
        const { visibility, type } = req.query;
        // Only list by creator.
        const creatorProfile = await prisma_js_1.default.creatorProfile.findFirst({
            where: { id: String(id) },
        });
        if (!creatorProfile) {
            return res.json([]);
        }
        const where = { deletedAt: null, creatorId: creatorProfile.userId };
        if (type)
            where.type = String(type);
        if (visibility)
            where.visibility = String(visibility);
        // Paid gate if requested visibility=paid and user exists.
        const list = await prisma_js_1.default.content.findMany({
            where,
            orderBy: { createdAt: "desc" },
        });
        // Apply paid access gate to paid items.
        const user = req.user;
        const filtered = [];
        for (const c of list) {
            if (c.visibility === "paid") {
                if (!user)
                    continue;
                const ok = await hasCompletedPremiumPurchase(user.id, c.id);
                if (!ok)
                    continue;
            }
            filtered.push(c);
        }
        res.json(filtered);
    }
    catch (e) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
exports.default = {
    generateContentUploadUrl,
    createContent,
    getContentList,
    getContent,
    patchContent,
    deleteContent,
    getCreatorProfileContent,
};
