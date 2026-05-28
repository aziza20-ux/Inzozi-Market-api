import { Request, Response } from 'express';
import argon2 from 'argon2';
import prisma from '../config/prisma';
import { redis } from '../services/redis.service';
import { generateAccessToken, generateRefreshToken, verifyToken } from '../services/token.service';
import {
  registerSchema,
  loginSchema,
  verifySchema,
  refreshSchema,
} from '../validators/schema.validators';
import nodemailer from 'nodemailer';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = registerSchema.parse(req.body) as any;
    const identifier = data.email ?? data.phone;

    if (!identifier) {
      res.status(400).json({ error: 'Either email or phone is required' });
      return;
    }

    const existing = await prisma.user.findUnique({ where: { email: identifier } });
    if (existing) {
      res.status(409).json({ error: 'Email already in use' });
      return;
    }

    const password_hash = await argon2.hash(data.password);

    const user = await prisma.user.create({
      data: {
        name: identifier,
        email: identifier,
        password: password_hash,
        role: data.role,
      },
    });
    // generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // store in redis with 5 minute TTL
    try {
      await redis.set(`otp:${user.id}`, otp, 'EX', 60 * 5);
    } catch (e) {
      console.error('Failed to store OTP in redis', e);
    }

    // send email if SMTP configured, otherwise log OTP
    const smtpHost = process.env.SMTP_HOST;
    if (smtpHost) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: process.env.SMTP_USER
            ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
            : undefined,
        });

        const from = process.env.FROM_EMAIL || `no-reply@${process.env.SMTP_HOST}`;
        await transporter.sendMail({
          from,
          to: identifier,
          subject: 'Your verification code',
          text: `Your verification code is ${otp}. It expires in 5 minutes.`,
        });
      } catch (e) {
        console.error('Failed to send OTP email', e);
        console.log(`OTP for ${identifier}: ${otp}`);
      }
    } else {
      console.log(`Sending OTP to ${identifier}: ${otp}`);
    }

    res.status(201).json({ message: 'User registered, please verify OTP', userId: user.id });
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = loginSchema.parse(req.body) as any;
    const identifier = data.email ?? data.phone;

    if (!identifier) {
      res.status(400).json({ error: 'Either email or phone is required' });
      return;
    }

    const user = await prisma.user.findUnique({ where: { email: identifier } });

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const isValid = await argon2.verify(user.password, data.password);
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

    if (!userId) {
      res.status(400).json({ error: 'Missing userId' });
      return;
    }

    const stored = await redis.get(`otp:${userId}`);
    if (!stored) {
      res.status(400).json({ error: 'OTP expired or not found' });
      return;
    }

    if (stored !== String(otp)) {
      res.status(400).json({ error: 'Invalid OTP' });
      return;
    }

    // valid
    await prisma.user.update({ where: { id: userId }, data: { verificationStatus: 'VERIFIED' } });
    await redis.del(`otp:${userId}`);
    res.status(200).json({ message: 'User verified' });
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
    res.status(204).send();
  } catch (err: any) {
    res.status(204).send();
  }
};
