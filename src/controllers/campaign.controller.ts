import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { AuthRequest } from "../middleware/auth";
import {
  campaignCreateSchema,
  campaignUpdateSchema,
  campaignStatusUpdateSchema,
} from '../validators/schema.validators';

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
      niche_filter: req.body.niche_filter ?? 'general',
      min_audience_size: req.body.min_audience_size ?? 0,
      max_creators: req.body.max_creators ?? 1,
    });

    if (data.budget < 10) {
      res.status(400).json({ error: 'CAMPAIGN_BUDGET_TOO_LOW' });
      return;
    }

    const campaign = await prisma.campaign.create({
      data: {
        title: data.title!,
        description: data.description,
        budget: data.budget!,
        startDate: data.startDate ?? new Date(),
        endDate: data.endDate ?? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        businessId: req.userId!,
        niche_filter: data.niche_filter ?? 'general',
        min_audience_size: data.min_audience_size ?? 0,
        max_creators: data.max_creators ?? 1,
      },
    });

    res.status(201).json(campaign);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const getCampaigns = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, cursor, limit = 10 } = req.query;

    const where: any = {};
    if (status) where.status = String(status).toUpperCase();

    const campaigns = await prisma.campaign.findMany({
      where,
      take: Number(limit),
      ...(cursor && { skip: 1, cursor: { id: String(cursor) } }),
      orderBy: { endDate: 'asc' },
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
        ...(data.endDate && { endDate: data.endDate }),
      },
    });

    res.status(200).json(updated);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const updateCampaignStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const authReq = req as AuthRequest;
    const userId = authReq.userId ?? (req as any).user?.userId ?? (req as any).user?.id;
    const role = authReq.role ?? (req as any).user?.role;

    const campaign = await prisma.campaign.findUnique({ where: { id: String(id) } });

    if (!campaign) {
      res.status(404).json({ error: 'Campaign not found' });
      return;
    }

    if (campaign.businessId !== userId && role !== 'ADMIN') {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    if (campaign.status === 'CANCELLED' || campaign.status === 'COMPLETED') {
      res.status(400).json({ error: 'CAMPAIGN_STATUS_TERMINAL' });
      return;
    }

    const { status } = campaignStatusUpdateSchema.parse(req.body);

    const validTransitions: Record<string, string[]> = {
      DRAFT: ['ACTIVE', 'CANCELLED'],
      ACTIVE: ['IN_PROGRESS', 'COMPLETED', 'CANCELLED'],
      IN_PROGRESS: ['COMPLETED', 'CANCELLED'],
      COMPLETED: [],
      CANCELLED: [],
    };

    if (!validTransitions[campaign.status].includes(status)) {
      res.status(400).json({ error: 'INVALID_CAMPAIGN_STATUS_TRANSITION' });
      return;
    }

    const updated = await prisma.campaign.update({
      where: { id: String(id) },
      data: { status: status as any },
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

// FIX 1: was `const { id: campaignId } = req.params.id` — req.params.id is a
// string, not an object. Destructuring it always yields undefined, causing every
// application creation to fail with a cryptic error.
// FIX 2: added `proposal` field so the offer text is saved to the database.
export const createApplication = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const campaignId = String(req.params.id);              // cast: req.params values are string | string[]
    const { creatorId, proposal } = req.body;

    const campaign = await prisma.campaign.findUnique({ where: { id: campaignId } });
    if (!campaign) {
      res.status(404).json({ error: 'Campaign not found' });
      return;
    }

    // BUSINESS sending an invite → creatorId comes from body
    // CREATOR applying themselves → use their own userId
    const finalCreatorId: string | undefined =
      req.role === 'CREATOR' ? req.userId : String(creatorId ?? '');
    if (!finalCreatorId) {
      res.status(400).json({ error: 'Creator ID is required' });
      return;
    }

    // Prevent duplicate applications
    const existing = await prisma.application.findFirst({
      where: { campaignId, creatorId: finalCreatorId },
    });
    if (existing) {
      res.status(409).json({ error: 'Application already exists for this creator and campaign' });
      return;
    }

    const application = await prisma.application.create({
      data: {
        campaignId,                                        // already a plain string
        creatorId: finalCreatorId,
        proposal: proposal ? String(proposal) : null,
        status: 'PENDING',
      },
      include: {
        creator: {
          select: { id: true, name: true, email: true, role: true, profileImage: true },
        },
      },
    });

    res.status(201).json(application);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const updateApplicationStatus = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const campaignId = String(req.params.id);              // cast: same fix as above
    const { status, creatorId } = req.body;

    const finalCreatorId: string | undefined =
      req.role === 'CREATOR' ? req.userId : String(creatorId ?? '');
    if (!finalCreatorId) {
      res.status(400).json({ error: 'Creator ID is required' });
      return;
    }

    if (!['PENDING', 'ACCEPTED', 'DECLINED'].includes(status)) {
      res.status(400).json({ error: 'Invalid status value' });
      return;
    }

    const application = await prisma.application.update({
      where: {
        campaignId_creatorId: {
          campaignId,
          creatorId: finalCreatorId,
        },
      },
      data: { status },
    });

    res.status(200).json(application);
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const getApplications = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const applications = await prisma.application.findMany({
      where: {
        OR: [
          { creatorId: req.userId },
          { campaign: { businessId: req.userId } }
        ]
      },
      include: {
        campaign: true,
        creator: {
          select: { id: true, name: true, email: true, role: true, profileImage: true },
        },
      },
    });
    res.status(200).json(applications);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};