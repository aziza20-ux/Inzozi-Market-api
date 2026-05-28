import type { Request, Response,NextFunction } from "express";
import prisma from "../config/prisma";
import jwt, { type Secret, type SignOptions } from "jsonwebtoken";
import type { AuthUser } from "../types/express.js";

const allowedRoles = ["ADMIN", "CREATOR", "BUSINESS", "CONSUMER", "SYSTEM"] as const;

function isAuthRole(role: string): role is AuthUser["role"] {
    return allowedRoles.includes(role as AuthUser["role"]);
}

export interface AuthRequest extends Request {
  userId?: string;
    role?: AuthUser["role"];
}
type AuthRole = NonNullable<Express.Request["user"]>["role"];

export const authenticate= async (req:AuthRequest,res:Response, next:NextFunction):Promise<void>=>{
    const header = req.headers['authorization']
    if (!header?.startsWith('Bearer ')){
        res.status(401).json({error:'Invalid token'})
        return;
    }
    const token = header.split(" ")[1]
    try{
        const decoded = jwt.verify(token!, JWT_SECRET) as { userId: string; role: string }
        req.userId=decoded.userId;
        if (isAuthRole(decoded.role)) {
            req.role = decoded.role;
        }
        next();
    } catch {
        res.status(401).json({error:'Invalid or expired token'})
    }
}
