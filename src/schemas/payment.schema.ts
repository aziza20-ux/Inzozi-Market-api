import { z } from 'zod';

export const createPaymentSchema = z.object({
  amount: z.number().int().positive(),
  type: z.enum(['subscription', 'tip', 'premium_purchase'])
});
