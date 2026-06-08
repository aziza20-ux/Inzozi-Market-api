import type { Request, Response, NextFunction } from 'express';
import { AuthRequest } from './auth';

export const requireRole = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const role = req.role || req.user?.role;

    if (!role) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }

    if (!roles.includes(role)) {
      return res.status(403).json({ error: 'INSUFFICIENT_ROLE' });
    }

    next();
  };
};
