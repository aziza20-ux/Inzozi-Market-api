import type { Request, Response, NextFunction } from "express";

export const requireVerified = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const isVerified =
    req.user.verificationStatus === "VERIFIED" ||
    req.user.verification_status === "verified";

  if (!isVerified) {
    return res.status(403).json({
      error: "USER_NOT_VERIFIED",
    });
  }

  next();
};
