import { Request } from "express";

export interface AuthUser {
  id: string;
  email: string;
  role: "ADMIN" | "CREATOR" | "BUSINESS" | "CONSUMER" | "SYSTEM";
  verification_status?: "verified" | "pending";
  verificationStatus?: "VERIFIED" | "PENDING" | "REJECTED";
}
declare global {
    namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}





