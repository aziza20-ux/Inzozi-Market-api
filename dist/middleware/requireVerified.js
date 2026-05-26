"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireVerified = void 0;
const requireVerified = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    const isVerified = req.user.verification_status === "verified" ||
        req.user.verificationStatus === "VERIFIED";
    if (!isVerified) {
        return res.status(403).json({
            error: "USER_NOT_VERIFIED",
        });
    }
    next();
};
exports.requireVerified = requireVerified;
//# sourceMappingURL=requireVerified.js.map