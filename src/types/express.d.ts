import { Request } from "express";

export interface AuthUser {
  id: string;
  email: string;
  role: "ADMIN" | "SELLER" | "BUYER";
  verification_status: "verified" | "pending";
}
declare global {
    namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}





