import type { Response, NextFunction } from "express";
import prisma from "../config/prisma.js";
import type { AuthRequest } from "./auth.js";

export const requireVerified = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;

  if (user) {
    const verified =
      user.verificationStatus === "VERIFIED" ||
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

  prisma.user.findUnique({ where: { id: req.userId } })
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
