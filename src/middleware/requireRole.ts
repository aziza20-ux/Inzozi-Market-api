import type { Request, Response, NextFunction } from "express";
import { AuthRequest } from "./auth";

export const requireRole = (...roles: string[]) => {
  return (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    if (!req.role || !roles.includes(req.role)) {
      return res.status(403).json({ error: "INSUFFICIENT_ROLE" });
    }

    next();
  };
};