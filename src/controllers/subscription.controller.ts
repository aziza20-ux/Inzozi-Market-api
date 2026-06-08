import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { AuthRequest } from '../middleware/auth';

export const subscribeToCreator = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const subscriberId = req.userId;
    const creatorId = Array.isArray(req.params.creatorId)
      ? req.params.creatorId[0]
      : req.params.creatorId;

    if (!subscriberId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    if (!creatorId) {
      res.status(400).json({ error: 'Creator ID is required' });
      return;
    }

    if (subscriberId === creatorId) {
      res.status(400).json({ error: 'Cannot subscribe to yourself' });
      return;
    }

    // Check if creator exists and get fee
    const creatorProfile = await prisma.creatorProfile.findUnique({
      where: { userId: creatorId },
    });

    if (!creatorProfile) {
      res.status(404).json({ error: 'Creator profile not found' });
      return;
    }

    const amount = creatorProfile.subscriptionFee || 0;

    // Create a mock successful payment transaction
    const transaction = await prisma.paymentTransaction.create({
      data: {
        userId: subscriberId,
        amount,
        paymentType: 'SUBSCRIPTION',
        paymentStatus: 'SUCCESS',
        transactionRef: `SUB_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      },
    });

    // Calculate dates (1 month duration)
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);

    // Create or update subscription
    const subscription = await prisma.subscription.upsert({
      where: {
        subscriberId_creatorId: {
          subscriberId,
          creatorId,
        },
      },
      update: {
        amount,
        status: 'ACTIVE',
        endDate,
      },
      create: {
        subscriberId,
        creatorId,
        amount,
        status: 'ACTIVE',
        startDate,
        endDate,
      },
    });

    res.status(200).json({ subscription, transaction });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getMySubscriptions = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const subscriberId = req.userId;

    if (!subscriberId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const subscriptions = await prisma.subscription.findMany({
      where: { subscriberId },
      include: {
        creator: {
          select: { id: true, name: true, profileImage: true },
        },
      },
    });

    res.status(200).json(subscriptions);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getCreatorSubscribers = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const creatorId = req.userId;

    if (!creatorId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const subscribers = await prisma.subscription.findMany({
      where: { creatorId },
      include: {
        subscriber: {
          select: { id: true, name: true, profileImage: true, email: true },
        },
      },
    });

    res.status(200).json(subscribers);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
