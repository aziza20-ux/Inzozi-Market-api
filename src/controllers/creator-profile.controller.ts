import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { AuthRequest } from '../middleware/auth';
import { creatorProfileCreateSchema, creatorProfileUpdateSchema, creatorProfileStatusSchema } from '../validators/schema.validators';

export const createProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (req.role !== 'CREATOR') {
      res.status(403).json({ error: 'Creator role required' });
      return;
    }

    if (!req.userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const body = req.body as Record<string, unknown>;

    const data = creatorProfileCreateSchema.parse({
      bio: body.bio,
      specialization: body.specialization,
      socialLinks: body.socialLinks,
      earnings: body.earnings,
      followers: body.followers,
      avatar: body.avatar ? String(body.avatar) : undefined,
      location: body.location ? String(body.location) : undefined,
      payout_account: body.payout_account ? String(body.payout_account) : undefined,
      payout_network: body.payout_network ? String(body.payout_network) : undefined
    });

    const existing = await prisma.creatorProfile.findUnique({ where: { userId: req.userId } });
    if (existing) {
      res.status(409).json({ error: 'Profile already exists' });
      return;
    }

    const profile = await prisma.creatorProfile.create({
      data: {
        userId: req.userId,
        bio: data.bio,
        specialization: data.specialization,
        socialLinks: data.socialLinks,
        earnings: data.earnings,
        followers: data.followers,
        avatar: data.avatar,
        location: data.location,
        payout_account: data.payout_account,
        payout_network: data.payout_network
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
    if (niche) where.socialLinks = { contains: String(niche) };
    if (country) where.socialLinks = { contains: String(country) };
    if (display_name) where.specialization = { contains: String(display_name), mode: 'insensitive' };

    const profiles = await prisma.creatorProfile.findMany({
      where,
      take: Number(limit),
      ...(cursor && { skip: 1, cursor: { id: String(cursor) } }),
      orderBy: { followers: 'desc' }
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
    const authReq = req as AuthRequest;

    if (!authReq.userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    
    const profile = await prisma.creatorProfile.findUnique({ where: { id: String(id) } });
    if (!profile) {
      res.status(404).json({ error: 'Profile not found' });
      return;
    }

    if (profile.userId !== authReq.userId) {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    const body = req.body as Record<string, unknown>;

    const data = creatorProfileUpdateSchema.parse({
      bio: body.bio,
      specialization: body.specialization,
      socialLinks: body.socialLinks,
      earnings: body.earnings,
      followers: body.followers,
      avatar: body.avatar ? String(body.avatar) : undefined,
      location: body.location ? String(body.location) : undefined,
      payout_account: body.payout_account ? String(body.payout_account) : undefined,
      payout_network: body.payout_network ? String(body.payout_network) : undefined
    });

    const updated = await prisma.creatorProfile.update({
      where: { id: String(id) },
      data: {
        ...(data.bio !== undefined && { bio: data.bio }),
        ...(data.specialization !== undefined && { specialization: data.specialization }),
        ...(data.socialLinks !== undefined && { socialLinks: data.socialLinks }),
        ...(data.earnings !== undefined && { earnings: data.earnings }),
        ...(data.followers !== undefined && { followers: data.followers }),
        ...(data.avatar !== undefined && { avatar: data.avatar }),
        ...(data.location !== undefined && { location: data.location }),
        ...(data.payout_account !== undefined && { payout_account: data.payout_account }),
        ...(data.payout_network !== undefined && { payout_network: data.payout_network })
      }
    });

    res.status(200).json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const updateProfileStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const authReq = req as AuthRequest;
    
    if (authReq.role !== 'ADMIN') {
      res.status(403).json({ error: 'Admin role required' });
      return;
    }

    const { profile_status } = creatorProfileStatusSchema.parse(req.body);

    const profile = await prisma.creatorProfile.findUnique({ where: { id: String(id) } });
    if (!profile) {
      res.status(404).json({ error: 'Profile not found' });
      return;
    }

    const existingSocialLinks = (() => {
      try {
        return profile.socialLinks ? JSON.parse(profile.socialLinks) : {};
      } catch {
        return {};
      }
    })();

    const updated = await prisma.creatorProfile.update({
      where: { id: String(id) },
      data: { socialLinks: JSON.stringify({ ...existingSocialLinks, profile_status }) }
    });

    res.status(200).json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};
