import { Router } from 'express';
import { createCampaign, getCampaigns, getCampaignById, updateCampaign, updateCampaignStatus } from '../controllers/campaign.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.post('/', authMiddleware, createCampaign);
router.get('/', getCampaigns);
router.get('/:id', authMiddleware, getCampaignById);
router.patch('/:id', authMiddleware, updateCampaign);
router.patch('/:id/status', authMiddleware, updateCampaignStatus);

export default router;
