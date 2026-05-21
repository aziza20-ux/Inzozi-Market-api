import { Request, Response } from 'express';
import argon2 from 'argon2';
import { prisma } from '../prisma';
import { redis } from '../services/redis.service';
import { generateAccessToken, generateRefreshToken, verifyToken } from '../services/token.service';
import { registerSchema, loginSchema, verifySchema, refreshSchema } from '../schemas/auth.schema';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = registerSchema.parse(req.body);
    
    if (data.email) {
      const existing = await prisma.user.findUnique({ where: { email: data.email } });
      if (existing) {
        res.status(409).json({ error: 'Email already in use' });
        return;
      }
    }
    if (data.phone) {
      const existing = await prisma.user.findUnique({ where: { phone: data.phone } });
      if (existing) {
        res.status(409).json({ error: 'Phone already in use' });
        return;
      }
    }

    const password_hash = await argon2.hash(data.password);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        phone: data.phone,
        password_hash
      }
    });

    console.log(`Sending OTP to ${data.email || data.phone}`);
    res.status(201).json({ message: 'User registered, please verify OTP', userId: user.id });
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = loginSchema.parse(req.body);
    
    let user;
    if (data.email) {
      user = await prisma.user.findUnique({ where: { email: data.email } });
    } else if (data.phone) {
      user = await prisma.user.findUnique({ where: { phone: data.phone } });
    }

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const isValid = await argon2.verify(user.password_hash, data.password);
    if (!isValid) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const accessToken = generateAccessToken(user.id, user.role);
    const refreshToken = generateRefreshToken(user.id);

    await redis.set(`refresh:${user.id}:${refreshToken}`, 'valid', 'EX', 60 * 60 * 24 * 7);

    res.status(200).json({ accessToken, refreshToken });
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const verify = async (req: Request, res: Response): Promise<void> => {
  try {
    const { otp } = verifySchema.parse(req.body);
    const userId = req.body.userId;
    
    if (otp.length === 6 && userId) {
      await prisma.user.update({
        where: { id: userId },
        data: { verification_status: 'verified' }
      });
      res.status(200).json({ message: 'User verified' });
      return;
    }
    
    res.status(400).json({ error: 'Invalid OTP or missing userId' });
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const refresh = async (req: Request, res: Response): Promise<void> => {
  try {
    const { refreshToken } = refreshSchema.parse(req.body);
    
    const decoded = verifyToken(refreshToken);
    const userId = decoded.userId;

    const isValid = await redis.get(`refresh:${userId}:${refreshToken}`);
    if (!isValid) {
      res.status(401).json({ error: 'Invalid refresh token' });
      return;
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      res.status(401).json({ error: 'User not found' });
      return;
    }

    const newAccessToken = generateAccessToken(user.id, user.role);
    const newRefreshToken = generateRefreshToken(user.id);

    await redis.del(`refresh:${userId}:${refreshToken}`);
    await redis.set(`refresh:${userId}:${newRefreshToken}`, 'valid', 'EX', 60 * 60 * 24 * 7);

    res.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  } catch (err: any) {
    res.status(401).json({ error: 'Unauthorized or token expired' });
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    const { refreshToken } = req.body;
    if (refreshToken) {
      const decoded = verifyToken(refreshToken);
      await redis.del(`refresh:${decoded.userId}:${refreshToken}`);
    }
    res.status(200).json({ message: 'Logged out' });
  } catch (err: any) {
    res.status(200).json({ message: 'Logged out' });
  }
};
