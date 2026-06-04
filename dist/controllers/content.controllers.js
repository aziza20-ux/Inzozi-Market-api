"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContent = void 0;
const prisma_js_1 = __importDefault(require("../config/prisma.js"));
const createContent = async (req, res) => {
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
};
exports.createContent = createContent;
