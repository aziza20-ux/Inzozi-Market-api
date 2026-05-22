import prisma from "../config/prisma.js";
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
    const purchase = await prisma.premiumPurchase.findFirst({
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
export async function createContent(req, res) {
    try {
        const user = req.user;
        const { title, description, contentUrl, thumbnailUrl, type, visibility, price, currency, } = req.body ?? {};
        if (!title || !contentUrl || !type || !visibility) {
            return res.status(400).json({ error: "MISSING_REQUIRED_FIELDS" });
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
        const created = await prisma.content.create({
            data: {
                title,
                description: description ?? null,
                contentUrl,
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
export async function getContentList(req, res) {
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
        const list = await prisma.content.findMany({
            where,
            orderBy: { createdAt: "desc" },
        });
        res.json(list);
    }
    catch (e) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
export async function getContent(req, res) {
    try {
        const { id } = req.params;
        if (!id || Array.isArray(id)) {
            return res.status(400).json({ error: "INVALID_CONTENT_ID" });
        }
        const content = await prisma.content.findFirst({
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
export async function patchContent(req, res) {
    try {
        const user = req.user;
        const { id } = req.params;
        const content = await prisma.content.findFirst({
            where: { id: String(id), deletedAt: null },
        });
        if (!content)
            return res.status(404).json({ error: "CONTENT_NOT_FOUND" });
        if (content.creatorId !== user.id && user.role !== "ADMIN") {
            return res.status(403).json({ error: "CONTENT_UPDATE_DENIED" });
        }
        const { title, description, contentUrl, thumbnailUrl, type, visibility, price, currency, } = req.body ?? {};
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
        const updated = await prisma.content.update({
            where: { id: String(id) },
            data: {
                ...(title !== undefined ? { title } : {}),
                ...(description !== undefined ? { description: description } : {}),
                ...(contentUrl !== undefined ? { contentUrl } : {}),
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
export async function deleteContent(req, res) {
    try {
        const user = req.user;
        const { id } = req.params;
        const content = await prisma.content.findFirst({
            where: { id: String(id), deletedAt: null },
        });
        if (!content)
            return res.status(404).json({ error: "CONTENT_NOT_FOUND" });
        if (content.creatorId !== user.id && user.role !== "ADMIN") {
            return res.status(403).json({ error: "CONTENT_DELETE_DENIED" });
        }
        await prisma.content.update({
            where: { id: String(id) },
            data: { deletedAt: new Date() },
        });
        res.status(204).send();
    }
    catch (e) {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
export async function moderationUpdate(req, res) {
    try {
        const { id } = req.params;
        const { moderationStatus, rejectionReason } = req.body ?? {};
        const status = toModerationStatus(moderationStatus);
        if (!status || (status !== "APPROVED" && status !== "REJECTED")) {
            return res.status(400).json({ error: "INVALID_MODERATION_TRANSITION" });
        }
        const content = await prisma.content.findFirst({
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
        const updated = await prisma.content.update({
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
export async function getCreatorProfileContent(req, res) {
    try {
        const { id } = req.params;
        const { visibility, type } = req.query;
        // Only list by creator; this endpoint is public but still must respect moderation visibility.
        const creatorProfile = await prisma.creatorProfile.findFirst({
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
        const list = await prisma.content.findMany({
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
export default {
    createContent,
    getContentList,
    getContent,
    patchContent,
    deleteContent,
    moderationUpdate,
    getCreatorProfileContent,
};
//# sourceMappingURL=content.controllers.js.map