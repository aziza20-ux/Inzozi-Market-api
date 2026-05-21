import { Request, Response } from 'express';
import { prisma } from '../prisma';
import { createCampaignSchema, updateCampaignSchema, updateCampaignStatusSchema } from '../schemas/campaign.schema';

export const createCampaign = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = (req as any).user;
    if (user.role !== 'business') {
      res.status(403).json({ error: 'Business role required' });
      return;
    }

    const data = createCampaignSchema.parse(req.body);

    const campaign = await prisma.campaign.create({
      data: {
        ...data,
        deadline_at: new Date(data.deadline_at),
        ownerId: user.userId
      }
    });

    res.status(201).json(campaign);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const getCampaigns = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, niche, min_audience_size, cursor, limit = 10 } = req.query;

    const where: any = {};
    if (status) where.status = String(status);
    if (niche) where.niche_filter = { has: String(niche) };
    if (min_audience_size) where.min_audience_size = { gte: Number(min_audience_size) };

    const campaigns = await prisma.campaign.findMany({
      where,
      take: Number(limit),
      ...(cursor && { skip: 1, cursor: { id: String(cursor) } }),
      orderBy: { deadline_at: 'asc' }
    });

    res.status(200).json(campaigns);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getCampaignById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const campaign = await prisma.campaign.findUnique({ where: { id: String(id) } });
    if (!campaign) {
      res.status(404).json({ error: 'Campaign not found' });
      return;
    }
    res.status(200).json(campaign);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCampaign = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const user = (req as any).user;
    
    const campaign = await prisma.campaign.findUnique({ where: { id: String(id) } });
    if (!campaign) {
      res.status(404).json({ error: 'Campaign not found' });
      return;
    }

    if (campaign.ownerId !== user.userId) {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }
    
    if (campaign.status !== 'draft') {
      res.status(400).json({ error: 'Can only update draft campaigns' });
      return;
    }

    const data = updateCampaignSchema.parse(req.body);

    const updated = await prisma.campaign.update({
      where: { id: String(id) },
      data: {
        ...data,
        ...(data.deadline_at && { deadline_at: new Date(data.deadline_at) })
      }
    });

    res.status(200).json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const updateCampaignStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const user = (req as any).user;
    
    const campaign = await prisma.campaign.findUnique({ where: { id: String(id) } });
    if (!campaign) {
      res.status(404).json({ error: 'Campaign not found' });
      return;
    }

    if (campaign.ownerId !== user.userId && user.role !== 'admin') {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    if (campaign.status === 'cancelled') {
      res.status(400).json({ error: 'Cancelled is a terminal state' });
      return;
    }

    const { status } = updateCampaignStatusSchema.parse(req.body);

    const validTransitions: Record<string, string[]> = {
      'draft': ['open', 'cancelled'],
      'open': ['in_progress', 'cancelled'],
      'in_progress': ['completed', 'cancelled'],
      'completed': [],
      'cancelled': []
    };

    if (!validTransitions[campaign.status].includes(status)) {
      res.status(422).json({ error: `Invalid transition from ${campaign.status} to ${status}` });
      return;
    }

    const updated = await prisma.campaign.update({
      where: { id: String(id) },
      data: { status }
    });

    res.status(200).json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};
