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
function toModerationStatus(v) {
    if (!v)
        return undefined;
    const up = v.toUpperCase();
    if (up === "PENDING" ||
        up === "APPROVED" ||
        up === "REJECTED" ||
        up === "REMOVED")
        return up;
    return undefined;
}
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
        const user = req.user;
        const { title, description, contentUrl, thumbnailUrl, type, visibility, price, currency, } = req.body ?? {};
        const mediaUrl = getMediaUrl(req.body);
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
                moderationStatus: "PENDING",
                rejectionReason: null,
                creatorId: user.id,
            },
        });
        res.status(201).json(created);
    }
    catch (e) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function getContentList(req, res) {
    try {
        const { type, visibility } = req.query;
        const where = {
            deletedAt: null,
            moderationStatus: "APPROVED",
        };
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
        // Public endpoint should only expose approved content unless paid-gate allows access.
        if (content.moderationStatus !== "APPROVED") {
            return res.status(403).json({ error: "CONTENT_NOT_ACCESSIBLE" });
        }
        if (isPaidContent(content.visibility)) {
            // Requires completed premium purchase.
            const user = req.user;
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
        const user = req.user;
        const { id } = req.params;
        const content = await prisma_js_1.default.content.findFirst({
            where: { id: String(id), deletedAt: null },
        });
        if (!content)
            return res.status(404).json({ error: "CONTENT_NOT_FOUND" });
        if (content.creatorId !== user.id && user.role !== "ADMIN") {
            return res.status(403).json({ error: "CONTENT_UPDATE_DENIED" });
        }
        const { title, description, contentUrl, thumbnailUrl, type, visibility, price, currency, } = req.body ?? {};
        const mediaUrl = getMediaUrl(req.body);
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
        const user = req.user;
        const { id } = req.params;
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
        res.status(204).send();
    }
    catch (e) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function moderationUpdate(req, res) {
    try {
        const { id } = req.params;
        const { moderationStatus, rejectionReason } = req.body ?? {};
        const status = toModerationStatus(moderationStatus);
        if (!status || (status !== "APPROVED" && status !== "REJECTED")) {
            return res.status(400).json({ error: "INVALID_MODERATION_TRANSITION" });
        }
        const content = await prisma_js_1.default.content.findFirst({
            where: { id: String(id), deletedAt: null },
        });
        if (!content)
            return res.status(404).json({ error: "CONTENT_NOT_FOUND" });
        if (content.moderationStatus !== "PENDING") {
            return res.status(400).json({ error: "INVALID_MODERATION_STATE" });
        }
        if (status === "REJECTED") {
            if (!rejectionReason) {
                return res.status(400).json({ error: "REJECTION_REASON_REQUIRED" });
            }
        }
        const updated = await prisma_js_1.default.content.update({
            where: { id: String(id) },
            data: {
                moderationStatus: status,
                rejectionReason: status === "REJECTED" ? String(rejectionReason) : null,
            },
        });
        res.json(updated);
    }
    catch (e) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function getCreatorProfileContent(req, res) {
    try {
        const { id } = req.params;
        const { visibility, type } = req.query;
        // Only list by creator; this endpoint is public but still must respect moderation visibility.
        const creatorProfile = await prisma_js_1.default.creatorProfile.findFirst({
            where: { id: String(id) },
        });
        if (!creatorProfile) {
            return res.json([]);
        }
        const where = {
            deletedAt: null,
            creatorId: creatorProfile.userId,
            moderationStatus: "APPROVED",
        };
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
    moderationUpdate,
    getCreatorProfileContent,
};
