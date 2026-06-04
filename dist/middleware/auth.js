"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
<<<<<<< HEAD
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const allowedRoles = ['ADMIN', 'CREATOR', 'BUSINESS', 'CONSUMER', 'SYSTEM'];
function isAuthRole(role) {
    return allowedRoles.includes(role);
}
=======
const allowedRoles = ["ADMIN", "CREATOR", "BUSINESS", "CONSUMER", "SYSTEM"];
function isAuthRole(role) {
    return allowedRoles.includes(role);
}
const JWT_SECRET = process.env.JWT_SECRET ?? "";
>>>>>>> origin/espy
const authenticate = async (req, res, next) => {
    const header = req.headers['authorization'];
    if (!header?.startsWith('Bearer ')) {
        res.status(401).json({ error: 'Invalid token' });
        return;
    }
<<<<<<< HEAD
    const token = header.split(' ')[1];
=======
    const token = header.split(" ")[1];
>>>>>>> origin/espy
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        if (isAuthRole(decoded.role)) {
            req.role = decoded.role;
<<<<<<< HEAD
            req.user = { id: decoded.userId, role: decoded.role };
=======
>>>>>>> origin/espy
        }
        next();
    }
    catch {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};
exports.authenticate = authenticate;
