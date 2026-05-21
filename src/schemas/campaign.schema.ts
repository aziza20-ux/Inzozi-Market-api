import { z } from 'zod';

export const createCampaignSchema = z.object({
  title: z.string(),
  budget: z.number().positive(),
  payout_per_creator: z.number().positive(),
  max_creators: z.number().int().positive(),
  deadline_at: z.string().refine(val => new Date(val) > new Date(), { message: 'Must be a future date' }),
  niche_filter: z.array(z.string()).default([]),
  min_audience_size: z.number().int().default(0)
}).refine(data => data.budget >= data.payout_per_creator * data.max_creators, { message: 'Budget insufficient for max creators' });

export const updateCampaignSchema = z.object({
  title: z.string().optional(),
  budget: z.number().positive().optional(),
  payout_per_creator: z.number().positive().optional(),
  max_creators: z.number().int().positive().optional(),
  deadline_at: z.string().optional(),
  niche_filter: z.array(z.string()).optional(),
  min_audience_size: z.number().int().optional()
});

export const updateCampaignStatusSchema = z.object({
  status: z.enum(['open', 'in_progress', 'completed', 'cancelled'])
});
