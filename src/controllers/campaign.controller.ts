import { Request, Response } from 'express';
import prisma from '../config/prisma';
import {AuthRequest} from "../middleware/auth";
import { campaignCreateSchema, campaignUpdateSchema, campaignStatusUpdateSchema, campaignStatusEnum } from '../validators/schema.validators';

export const createCampaign = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    
    if (req.role !== 'BUSINESS') {
      res.status(403).json({ error: 'Business role required' });
      return;
    }

    const data = campaignCreateSchema.parse({
      title: req.body.title,
      description: req.body.description,
      budget: req.body.budget,
      startDate: req.body.startDate ?? new Date(),
      endDate: req.body.endDate ?? req.body.deadline_at,
      niche_filter: req.body.niche_filter,
      min_audience_size: req.body.min_audience_size,
      max_creators: req.body.max_creators,
    });

    const campaign = await prisma.campaign.create({
      data: {
        title: data.title!,
        description: data.description,
        budget: data.budget!,
        // status: 'DRAFT',
        startDate: data.startDate!,
        endDate: data.endDate!,
        businessId: req.userId!,
        niche_filter: data.niche_filter,
        min_audience_size: data.min_audience_size,
        max_creators: data.max_creators,
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
    if (status) where.status = String(status).toUpperCase();
    if (niche || min_audience_size) {
      // preserved for API compatibility; these filters are not represented in the current Prisma model
    }

    const campaigns = await prisma.campaign.findMany({
      where,
      take: Number(limit),
      ...(cursor && { skip: 1, cursor: { id: String(cursor) } }),
      orderBy: { endDate: 'asc' }
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

export const updateCampaign = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
  
    
    const campaign = await prisma.campaign.findUnique({ where: { id: String(id) } });
    if (!campaign) {
      res.status(404).json({ error: 'Campaign not found' });
      return;
    }

    if (campaign.businessId !== req.userId) {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }
    
    if (campaign.status !== 'DRAFT') {
      res.status(400).json({ error: 'Can only update draft campaigns' });
      return;
    }

    const data = campaignUpdateSchema.parse({
      title: req.body.title,
      description: req.body.description,
      budget: req.body.budget,
      endDate: req.body.endDate ?? req.body.deadline_at,
    });

    const updated = await prisma.campaign.update({
      where: { id: String(id) },
      data: {
        ...(data.title && { title: data.title }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.budget && { budget: data.budget }),
        ...(data.endDate && { endDate: data.endDate })
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

    if (campaign.businessId !== user.userId && user.role !== 'ADMIN') {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    if (campaign.status === 'CANCELLED') {
      res.status(400).json({ error: 'Cancelled is a terminal state' });
      return;
    }

    const { status } = campaignStatusUpdateSchema.parse(req.body);
    const nextStatus = status;

    const validTransitions: Record<string, string[]> = {
      DRAFT: ['ACTIVE', 'CANCELLED'],
      ACTIVE: ['COMPLETED', 'CANCELLED'],
      COMPLETED: [],
      CANCELLED: []
    };

    if (!validTransitions[campaign.status].includes(nextStatus)) {
      res.status(422).json({ error: `Invalid transition from ${campaign.status} to ${nextStatus}` });
      return;
    }

    const updated = await prisma.campaign.update({
      where: { id: String(id) },
      data: { status: nextStatus as any }
    });

    res.status(200).json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const deleteCampaign = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const campaign = await prisma.campaign.findUnique({ where: { id: String(id) } });
    if (!campaign) {
      res.status(404).json({ error: 'Campaign not found' });
      return;
    }

    if (campaign.businessId !== req.userId && req.role !== 'ADMIN') {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    if (campaign.status === 'ACTIVE') {
      res.status(400).json({ error: 'Active campaigns cannot be deleted' });
      return;
    }

    await prisma.campaign.delete({ where: { id: String(id) } });

    res.status(200).json({ message: 'Campaign deleted successfully' });
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};
