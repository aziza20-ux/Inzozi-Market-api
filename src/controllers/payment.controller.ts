import { Request, Response } from 'express';
import { prisma } from '../prisma';
import { paymentTransactionCreateSchema, paymentTypeEnum } from '../validators/schema.validators';
import { acquireIdempotencyLock, releaseIdempotencyLock } from '../services/idempotency.service';

const paymentTypeMap = {
  subscription: 'SUBSCRIPTION',
  tip: 'CAMPAIGN_PAYMENT',
  premium_purchase: 'PRODUCT_PURCHASE'
} as const;

export const createPayment = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = (req as any).user;
    const idempotencyKey = req.headers['idempotency-key'] as string;

    if (!idempotencyKey) {
      res.status(400).json({ error: 'idempotency-key header is required' });
      return;
    }

    const paymentType = paymentTypeMap[req.body.type as keyof typeof paymentTypeMap];
    const { amount, paymentType: validatedPaymentType, transactionRef } = paymentTransactionCreateSchema.parse({
      amount: req.body.amount,
      paymentType,
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
          userId: user.userId
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

export const getPaymentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const user = (req as any).user;

    const payment = await prisma.paymentTransaction.findUnique({ where: { id: String(id) } });
    if (!payment) {
      res.status(404).json({ error: 'Payment not found' });
      return;
    }

    if (payment.userId !== user.userId && user.role !== 'ADMIN') {
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
    const user = (req as any).user;
    const { type, status, cursor, limit = 10 } = req.query;

    const where: any = { userId: user.userId };
    if (type) where.paymentType = String(type).toUpperCase();
    if (status) where.paymentStatus = String(status).toUpperCase();

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
