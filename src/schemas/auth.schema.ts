import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().optional(),
  password: z.string().min(8)
}).refine(data => data.email || data.phone, { message: "Either email or phone is required" });

export const loginSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().optional(),
  password: z.string()
});

export const verifySchema = z.object({
  otp: z.string().length(6)
});

export const refreshSchema = z.object({
  refreshToken: z.string()
});
