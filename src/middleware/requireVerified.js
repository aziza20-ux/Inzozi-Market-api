export const requireVerified = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }
    if (req.user.verification_status !== "verified") {
        return res.status(403).json({
            error: "USER_NOT_VERIFIED",
        });
    }
    next();
};
//# sourceMappingURL=requireVerified.js.map