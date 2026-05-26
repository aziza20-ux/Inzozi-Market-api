import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  userId?: string;
  role?: string;
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
        const decoded = jwt.verify(token!, process.env.JWT_SECRET || "supersecret123") as {
            id?: string;
            userId?: string;
            role: AuthRole;
            email?: string;
            verificationStatus?: "VERIFIED" | "PENDING" | "REJECTED";
        };
        const userId = decoded.userId ?? decoded.id;
        if (!userId) {
            res.status(401).json({error:'Invalid or expired token'})
            return;
        }
        req.userId=userId;
        req.role=decoded.role;
        req.user = {
            id: userId,
            email: decoded.email,
            role: decoded.role,
            verificationStatus: decoded.verificationStatus,
        };
        next();
    } catch {
        res.status(401).json({error:'Invalid or expired token'})
    }
}
