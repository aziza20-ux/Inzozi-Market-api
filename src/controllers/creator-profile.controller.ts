import { Request, Response } from 'express';
import { prisma } from '../prisma';
import { creatorProfileCreateSchema, creatorProfileUpdateSchema, creatorProfileStatusSchema } from '../validators/schema.validators';

export const createProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = (req as any).user;
    if (user.role !== 'CREATOR') {
      res.status(403).json({ error: 'Creator role required' });
      return;
    }

    const body = req.body as Record<string, unknown>;
    const legacyNiche = Array.isArray(body.niche) ? body.niche.map(String) : [];
    const specialization = body.specialization
      ? String(body.specialization)
      : [body.display_name, ...legacyNiche].filter(Boolean).join(', ');
    const socialLinks = body.socialLinks
      ? String(body.socialLinks)
      : JSON.stringify({
          niche: body.niche,
          country: body.country,
          payout_network: body.payout_network,
          payout_account: body.payout_account
        });

    const data = creatorProfileCreateSchema.parse({
      bio: body.bio,
      specialization,
      socialLinks,
      earnings: body.earnings,
      followers: body.followers
    });

    const existing = await prisma.creatorProfile.findUnique({ where: { userId: user.userId } });
    if (existing) {
      res.status(409).json({ error: 'Profile already exists' });
      return;
    }

    const profile = await prisma.creatorProfile.create({
      data: {
        userId: user.userId,
        bio: data.bio,
        specialization: data.specialization,
        socialLinks: data.socialLinks,
        earnings: data.earnings,
        followers: data.followers
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

    const body = req.body as Record<string, unknown>;
    const legacyNiche = Array.isArray(body.niche) ? body.niche.map(String) : [];
    const specialization = body.specialization
      ? String(body.specialization)
      : body.display_name || legacyNiche.length > 0
        ? [body.display_name, ...legacyNiche].filter(Boolean).join(', ')
        : undefined;
    const socialLinks = body.socialLinks
      ? String(body.socialLinks)
      : body.payout_network || body.payout_account || body.country || legacyNiche.length > 0 || body.display_name
        ? JSON.stringify({
            niche: body.niche,
            country: body.country,
            payout_network: body.payout_network,
            payout_account: body.payout_account
          })
        : undefined;

    const data = creatorProfileUpdateSchema.parse({
      bio: body.bio,
      specialization,
      socialLinks,
      earnings: body.earnings,
      followers: body.followers
    });

    const updated = await prisma.creatorProfile.update({
      where: { id: String(id) },
      data: {
        ...(data.bio !== undefined && { bio: data.bio }),
        ...(data.specialization !== undefined && { specialization: data.specialization }),
        ...(data.socialLinks !== undefined && { socialLinks: data.socialLinks }),
        ...(data.earnings !== undefined && { earnings: data.earnings }),
        ...(data.followers !== undefined && { followers: data.followers })
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
    const user = (req as any).user;
    
    if (user.role !== 'admin') {
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
