import type { Request, Response, NextFunction } from 'express';
import prisma from '../config/prisma';
import jwt, { type Secret, type SignOptions } from 'jsonwebtoken';
import type { AuthUser } from '../types/express.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const allowedRoles = ['ADMIN', 'CREATOR', 'BUSINESS', 'CONSUMER', 'SYSTEM'] as const;

function isAuthRole(role: string): role is AuthUser['role'] {
  return allowedRoles.includes(role as AuthUser['role']);
}

export interface AuthRequest extends Request {
  userId?: string;
  role?: AuthUser['role'];
}
type AuthRole = NonNullable<Express.Request['user']>['role'];

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const header = req.headers['authorization'];
  if (!header?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Invalid token' });
    return;
  }
  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token!, JWT_SECRET) as {
      id?: string;
      userId?: string;
      role: string;
      verificationStatus?: string;
      verification_status?: string;
    };
    const userId = decoded.userId || decoded.id;
    req.userId = userId;
    if (isAuthRole(decoded.role)) {
      req.role = decoded.role;
      req.user = {
        ...(decoded as any),
        id: userId,
        role: decoded.role,
      } as AuthUser;
    }
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};
