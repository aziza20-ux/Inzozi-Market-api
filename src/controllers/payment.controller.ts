import { Request, Response } from 'express';
import prisma from '../config/prisma';
import { paymentTransactionCreateSchema, paymentTypeEnum, paymentStatusEnum } from '../validators/schema.validators';
import { acquireIdempotencyLock, releaseIdempotencyLock } from '../services/idempotency.service';
import { AuthRequest } from '../middleware/auth';
import type { PaymentTransaction } from "../../generated/prisma";
import { randomUUID } from "crypto";

import { requestMobileMoneyTransfer } from "../services/mockMobileMoneyProvider.js";

export const createPayment = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const idempotencyKey = req.headers['idempotency-key'] as string;

    if (!idempotencyKey) {
      res.status(400).json({ error: 'idempotency-key header is required' });
      return;
    }

    const { amount, paymentType: validatedPaymentType, transactionRef } = paymentTransactionCreateSchema.parse({
      amount: req.body.amount,
      paymentType: req.body.paymentType,
      transactionRef: idempotencyKey
    });

    const locked = await acquireIdempotencyLock(idempotencyKey);
    if (!locked) {
      res.status(409).json({ error: 'PAYMENT_IN_PROGRESS' });
      return;
    }

    try {
      const existing = await prisma.paymentTransaction.findUnique({ where: { transactionRef } });
      
      if (existing) {
        if (existing.paymentStatus === 'SUCCESS') {
          res.status(200).json(existing);
          return;
        } else {
          res.status(409).json({ error: 'PAYMENT_IN_PROGRESS' });
          return;
        }
      }

      const transaction = await prisma.paymentTransaction.create({
        data: {
          transactionRef,
          amount,
          paymentType: validatedPaymentType,
          paymentStatus: 'PENDING',
          userId: req.userId
        }
      });

      await prisma.paymentTransaction.update({
        where: { id: transaction.id },
        data: { paymentStatus: 'SUCCESS' }
      });

      res.status(201).json({ ...transaction, paymentStatus: 'SUCCESS' });
    } finally {
      await releaseIdempotencyLock(idempotencyKey);
    }
  } catch (err: any) {
    res.status(400).json({ error: err.message || err.errors });
  }
};

export const getPaymentById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    if (!req.userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const payment = await prisma.paymentTransaction.findUnique({ where: { id: String(id) } });
    if (!payment) {
      res.status(404).json({ error: 'Payment not found' });
      return;
    }

    if (payment.userId !== req.userId && req.role !== 'ADMIN') {
      res.status(403).json({ error: 'Forbidden' });
      return;
    }

    res.status(200).json(payment);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getPayments = async (req: Request, res: Response): Promise<void> => {
  try {
    const authReq = req as AuthRequest;
    if (!authReq.userId) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const { type, status, cursor, limit = 10 } = req.query;

    const where: any = { userId: authReq.userId };
    if (type) where.paymentType = paymentTypeEnum.parse(String(type).toUpperCase());
    if (status) where.paymentStatus = paymentStatusEnum.parse(String(status).toUpperCase());

    const payments = await prisma.paymentTransaction.findMany({
      where,
      take: Number(limit),
      ...(cursor && { skip: 1, cursor: { id: String(cursor) } }),
      orderBy: { createdAt: 'desc' }
    });

    res.status(200).json(payments);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};





function parsePositiveAmount(value: unknown): number | null {
  const amount = Number(value);
  if (!Number.isFinite(amount) || amount <= 0) return null;
  return amount;
}

function makeTransactionRef(prefix: string) {
  return `${prefix}_${randomUUID()}`;
}

function isBusinessOrSystem(user: Express.Request["user"]) {
  return user?.role === "BUSINESS" || user?.role === "ADMIN" || user?.role === "SYSTEM";
}

export async function withdraw(req: Request, res: Response) {
  try {
    const user = req.user;
    if (!user) return res.status(401).json({ error: "UNAUTHORIZED" });
    if (user.role !== "CREATOR") {
      return res.status(403).json({ error: "CREATOR_ONLY" });
    }

    const amount = parsePositiveAmount(req.body?.amount);
    if (!amount) return res.status(400).json({ error: "INVALID_AMOUNT" });

    const profile = await prisma.creatorProfile.findUnique({
      where: { userId: user.id },
    });

    if (!profile?.payout_account) {
      return res.status(400).json({ error: "PAYOUT_ACCOUNT_MISSING" });
    }

    const transactionRef = makeTransactionRef("withdrawal");
    const transaction = await prisma.paymentTransaction.create({
      data: {
        userId: user.id,
        amount,
        paymentType: "WITHDRAWAL",
        paymentStatus: "PENDING",
        transactionRef,
      },
    });

    const provider = await requestMobileMoneyTransfer({
      transactionRef,
      amount,
      payoutAccount: profile.payout_account,
      metadata: { paymentTransactionId: transaction.id },
    });

    const updated = await prisma.paymentTransaction.update({
      where: { id: transaction.id },
      data: { providerRef: provider.providerRef },
    });

    return res.status(201).json(updated);
  } catch (e) {
    return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

export async function disburseCampaign(req: Request, res: Response) {
  try {
    const user = req.user;
    if (!user) return res.status(401).json({ error: "UNAUTHORIZED" });
    if (!isBusinessOrSystem(user)) {
      return res.status(403).json({ error: "INSUFFICIENT_ROLE" });
    }

    const campaignId =
      typeof req.params.id === "string" ? req.params.id : undefined;
    if (!campaignId) {
      return res.status(400).json({ error: "INVALID_CAMPAIGN_ID" });
    }

    const idempotencyKeyValue =
      req.headers["idempotency-key"] ?? req.body?.idempotency_key;
    if (
      typeof idempotencyKeyValue !== "string" ||
      idempotencyKeyValue.trim().length === 0
    ) {
      return res.status(400).json({ error: "IDEMPOTENCY_KEY_REQUIRED" });
    }
    const idempotencyKey = idempotencyKeyValue.trim();

    const campaign = (await prisma.campaign.findUnique({
      where: { id: campaignId },
      include: {
        applications: {
          where: { status: "ACCEPTED" },
          include: {
            creator: {
              include: { creatorProfile: true },
            },
          },
        },
      },
    })) as any;

    if (!campaign) return res.status(404).json({ error: "CAMPAIGN_NOT_FOUND" });
    if (user.role === "BUSINESS" && campaign.businessId !== user.id) {
      return res.status(403).json({ error: "ACCESS_DENIED" });
    }
    if (campaign.status !== "IN_PROGRESS" && campaign.status !== "COMPLETED") {
      return res.status(400).json({ error: "INVALID_CAMPAIGN_STATE" });
    }
    if (campaign.applications.length === 0) {
      return res.status(400).json({ error: "NO_ACCEPTED_CREATORS" });
    }

    const existing = await prisma.paymentTransaction.findMany({
      where: {
        campaignId,
        idempotencyKey,
        paymentType: "CAMPAIGN_DISBURSEMENT",
      },
      orderBy: { createdAt: "asc" },
    });
    if (existing.length > 0) {
      const allCompleted = existing.every(
        (transaction) => transaction.paymentStatus === "COMPLETED",
      );
      return res.status(allCompleted ? 200 : 202).json(existing);
    }

    const amount = campaign.budget / campaign.applications.length;
    const transactions: PaymentTransaction[] = [];

    for (const application of campaign.applications) {
      const payoutAccount = application.creator.creatorProfile?.payout_account;
      if (!payoutAccount) {
        return res.status(400).json({
          error: "PAYOUT_ACCOUNT_MISSING",
          creatorId: application.creatorId,
        });
      }

      const transactionRef = makeTransactionRef("campaign_disbursement");
      const created = await prisma.paymentTransaction.create({
        data: {
          userId: application.creatorId,
          amount,
          paymentType: "CAMPAIGN_DISBURSEMENT",
          paymentStatus: "PENDING",
          transactionRef,
          idempotencyKey,
          campaignId,
        },
      });

      const provider = await requestMobileMoneyTransfer({
        transactionRef,
        amount,
        payoutAccount,
        metadata: {
          campaignId,
          paymentTransactionId: created.id,
        },
      });

      const updated = await prisma.paymentTransaction.update({
        where: { id: created.id },
        data: { providerRef: provider.providerRef },
      });
      transactions.push(updated);
    }

    return res.status(201).json(transactions);
  } catch (e: any) {
    if (e?.code === "P2002") {
      return res.status(409).json({ error: "DUPLICATE_IDEMPOTENCY_KEY" });
    }
    return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

export async function mockProviderCallback(req: Request, res: Response) {
  try {
    const { transactionRef, providerRef, status } = req.body ?? {};
    if (!transactionRef && !providerRef) {
      return res.status(400).json({ error: "TRANSACTION_REFERENCE_REQUIRED" });
    }
    if (status !== "completed") {
      return res.status(400).json({ error: "UNSUPPORTED_CALLBACK_STATUS" });
    }

    const filters = [
      transactionRef ? { transactionRef: String(transactionRef) } : null,
      providerRef ? { providerRef: String(providerRef) } : null,
    ].filter((filter): filter is { transactionRef: string } | { providerRef: string } =>
      Boolean(filter),
    );

    const updated = await prisma.paymentTransaction.updateMany({
      where: {
        OR: filters,
      },
      data: { paymentStatus: "COMPLETED" },
    });

    return res.json({ updated: updated.count });
  } catch (e) {
    return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
  }
}

export default {
  withdraw,
  disburseCampaign,
  mockProviderCallback,
};
