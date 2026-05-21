import { Request, Response } from 'express';
import { prisma } from '../prisma';
import { createProfileSchema, updateProfileSchema, updateStatusSchema } from '../schemas/creator-profile.schema';

export const createProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = (req as any).user;
    if (user.role !== 'creator') {
      res.status(403).json({ error: 'Creator role required' });
      return;
    }

    const data = createProfileSchema.parse(req.body);

    const existing = await prisma.creatorProfile.findUnique({ where: { userId: user.userId } });
    if (existing) {
      res.status(409).json({ error: 'Profile already exists' });
      return;
    }

    const profile = await prisma.creatorProfile.create({
      data: {
        userId: user.userId,
        ...data
      }
    });

    res.status(201).json(profile);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const getProfiles = async (req: Request, res: Response): Promise<void> => {
  try {
    const { niche, country, display_name, cursor, limit = 10 } = req.query;

    const where: any = {};
    if (niche) where.niche = { has: String(niche) };
    if (country) where.country = String(country);
    if (display_name) where.display_name = { contains: String(display_name), mode: 'insensitive' };

    const profiles = await prisma.creatorProfile.findMany({
      where,
      take: Number(limit),
      ...(cursor && { skip: 1, cursor: { id: String(cursor) } }),
      orderBy: { audience_size: 'desc' }
    });

    res.status(200).json(profiles);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getProfileById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const profile = await prisma.creatorProfile.findUnique({ where: { id: String(id) } });
    if (!profile) {
      res.status(404).json({ error: 'Profile not found' });
      return;
    }
    res.status(200).json(profile);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const user = (req as any).user;
    
    const profile = await prisma.creatorProfile.findUnique({ where: { id: String(id) } });
    if (!profile) {
      res.status(404).json({ error: 'Profile not found' });
      return;
    }

    if (profile.userId !== user.userId) {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    const data = updateProfileSchema.parse(req.body);

    const updated = await prisma.creatorProfile.update({
      where: { id: String(id) },
      data
    });

    res.status(200).json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const updateProfileStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const user = (req as any).user;
    
    if (user.role !== 'admin') {
      res.status(403).json({ error: 'Admin role required' });
      return;
    }

    const { profile_status } = updateStatusSchema.parse(req.body);

    const updated = await prisma.creatorProfile.update({
      where: { id: String(id) },
      data: { profile_status }
    });

    res.status(200).json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};
