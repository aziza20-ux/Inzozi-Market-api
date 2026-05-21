import { z } from 'zod';

export const createProfileSchema = z.object({
  niche: z.array(z.string()).min(1),
  bio: z.string().optional(),
  country: z.string().optional(),
  display_name: z.string(),
  payout_network: z.string().optional(),
  payout_account: z.string().optional()
});

export const updateProfileSchema = z.object({
  bio: z.string().optional(),
  niche: z.array(z.string()).min(1).optional(),
  payout_network: z.string().optional(),
  payout_account: z.string().optional()
});

export const updateStatusSchema = z.object({
  profile_status: z.enum(['active', 'suspended'])
});
