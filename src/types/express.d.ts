import { Request } from "express";

export interface AuthUser {
  userId: string;
  role: "CREATOR" | "BUSINESS" | "CONSUMER" | "ADMIN";
  verificationStatus: "PENDING" | "VERIFIED" | "REJECTED";
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}