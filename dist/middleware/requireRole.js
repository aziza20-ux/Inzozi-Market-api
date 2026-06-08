"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = void 0;
const requireRole = (...roles) => {
    return (req, res, next) => {
        const role = req.role || req.user?.role;
        if (!role) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }
        if (!roles.includes(role)) {
            return res.status(403).json({ error: "INSUFFICIENT_ROLE" });
        }
        next();
    };
};
exports.requireRole = requireRole;
