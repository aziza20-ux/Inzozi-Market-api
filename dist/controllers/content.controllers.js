"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateContentUploadUrl = generateContentUploadUrl;
const prisma_js_1 = __importDefault(require("../config/prisma.js"));
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
        const user = req.user;
        // check logged in user
        if (!user) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }
        // verified creator check
        if (!user?.verification_status) {
            return res.status(403).json({
                message: "Only verified creators can upload content",
            });
        }
        const { title, description, contentUrl, thumbnailUrl, type, visibility, price, currency, } = req.body;
        // validate paid content
        if (visibility === "paid") {
            if (!price || !currency) {
                return res.status(400).json({
                    message: "Price and currency required for paid content",
                });
            }
        }
        const content = await prisma_js_1.default.content.create({
            data: {
                title,
                description,
                contentUrl,
                thumbnailUrl,
                type,
                visibility,
                price,
                currency,
                creatorId: user.id,
            },
        });
        res.status(201).json(content);
    }
    catch (error) {
        res.status(500).json({ error });
    }
}
;
