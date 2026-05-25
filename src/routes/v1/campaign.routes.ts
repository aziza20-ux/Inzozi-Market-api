import { Router } from 'express';
import { createCampaign, deleteCampaign, getCampaigns, getCampaignById, updateCampaign, updateCampaignStatus } from '../../controllers/campaign.controller';
import {authenticate} from "../../middleware/auth"


const router = Router();

router.post('/', authenticate, createCampaign);
router.get('/', getCampaigns);
router.get('/:id', authenticate, getCampaignById);
router.put('/:id', authenticate, updateCampaign);
router.patch('/:id/status', authenticate, updateCampaignStatus);
router.delete('/:id', authenticate, deleteCampaign);

export default router;
