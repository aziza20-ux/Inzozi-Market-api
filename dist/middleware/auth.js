"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = async (req, res, next) => {
    const header = req.headers['authorization'];
    if (!header?.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Invalid token' });
        return;
    }
    const token = header.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "supersecret123");
        const userId = decoded.userId ?? decoded.id;
        if (!userId) {
            res.status(401).json({ error: 'Invalid or expired token' });
            return;
        }
        req.userId = userId;
        req.role = decoded.role;
        req.user = {
            id: userId,
            email: decoded.email,
            role: decoded.role,
            verificationStatus: decoded.verificationStatus,
        };
        next();
    }
    catch {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};
exports.authenticate = authenticate;
