"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireVerified = void 0;
const prisma_js_1 = __importDefault(require("../config/prisma.js"));
const requireVerified = (req, res, next) => {
    const user = req.user;
    if (user) {
        const verified = user.verificationStatus === "VERIFIED" ||
            String(user.verification_status).toUpperCase() === "VERIFIED";
        if (!verified) {
            return res.status(403).json({
                error: "USER_NOT_VERIFIED",
            });
        }
        next();
        return;
    }
    if (!req.userId) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    prisma_js_1.default.user.findUnique({ where: { id: req.userId } })
        .then((dbUser) => {
        if (!dbUser) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }
        if (dbUser.verificationStatus !== "VERIFIED") {
            res.status(403).json({ error: "USER_NOT_VERIFIED" });
            return;
        }
        next();
    })
        .catch(() => {
        res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    });
};
exports.requireVerified = requireVerified;
