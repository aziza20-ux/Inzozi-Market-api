import { Request, Response } from 'express';
import { prisma } from '../prisma';
import { createPaymentSchema } from '../schemas/payment.schema';
import { acquireIdempotencyLock, releaseIdempotencyLock } from '../services/idempotency.service';

export const createPayment = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = (req as any).user;
    const idempotencyKey = req.headers['idempotency-key'] as string;

    if (!idempotencyKey) {
      res.status(400).json({ error: 'idempotency-key header is required' });
      return;
    }

    const { amount, type } = createPaymentSchema.parse(req.body);

    const locked = await acquireIdempotencyLock(idempotencyKey);
    if (!locked) {
      res.status(409).json({ error: 'PAYMENT_IN_PROGRESS' });
      return;
    }

    try {
      const existing = await prisma.paymentTransaction.findUnique({ where: { idempotency_key: idempotencyKey } });
      
      if (existing) {
        if (existing.status === 'completed') {
          res.status(200).json(existing);
          return;
        } else {
          res.status(409).json({ error: 'PAYMENT_IN_PROGRESS' });
          return;
        }
      }

      const transaction = await prisma.paymentTransaction.create({
        data: {
          idempotency_key: idempotencyKey,
          amount,
          type,
          status: 'pending',
          userId: user.userId
        }
      });

      await prisma.paymentTransaction.update({
        where: { id: transaction.id },
        data: { status: 'completed' }
      });
      transaction.status = 'completed';

      res.status(201).json(transaction);
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

    if (payment.userId !== user.userId && user.role !== 'admin') {
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
    if (type) where.type = String(type);
    if (status) where.status = String(status);

    const payments = await prisma.paymentTransaction.findMany({
      where,
      take: Number(limit),
      ...(cursor && { skip: 1, cursor: { id: String(cursor) } }),
      orderBy: { created_at: 'desc' }
    });

    res.status(200).json(payments);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
