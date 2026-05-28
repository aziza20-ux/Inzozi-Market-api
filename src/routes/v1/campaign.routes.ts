import { Router } from "express";
import {
	createCampaign,
	deleteCampaign,
	getCampaignById,
	getCampaigns,
	updateCampaign,
	updateCampaignStatus,
} from "../../controllers/campaign.controller.js";
import { disburseCampaign } from "../../controllers/payment.controllers.js";
import { authenticate } from "../../middleware/auth.js";

const router = Router();

router.post("/", authenticate, createCampaign);
router.get("/", getCampaigns);
router.get("/:id", authenticate, getCampaignById);
router.put("/:id", authenticate, updateCampaign);
router.patch("/:id/status", authenticate, updateCampaignStatus);
router.post("/:id/disburse", authenticate, disburseCampaign);
router.delete("/:id", authenticate, deleteCampaign);

export default router;
