import express from "express";
import { authenticate } from "../../middleware/auth.js";
import { requireRole } from "../../middleware/requireRole.js";
import { requireVerified } from "../../middleware/requireVerified.js";
import {
  applyToCampaign,
  listCampaignApplications,
  patchCampaignApplication,
} from "../../controllers/campaign.controllers.js";
import { disburseCampaign } from "../../controllers/payment.controllers.js";

const router = express.Router();

// POST /v1/campaigns/:id/applications
router.post(
  "/:id/applications",
  authenticate,
  requireVerified,
  requireRole("CREATOR"),
  applyToCampaign,
);

// GET /v1/campaigns/:id/applications
router.get(
  "/:id/applications",
  authenticate,
  requireRole("BUSINESS", "ADMIN"),
  listCampaignApplications,
);

// PATCH /v1/campaigns/:id/applications/:appId
router.patch(
  "/:id/applications/:appId",
  authenticate,
  requireRole("BUSINESS"),
  patchCampaignApplication,
);

// POST /v1/campaigns/:id/disburse
router.post(
  "/:id/disburse",
  authenticate,
  requireRole("BUSINESS", "ADMIN", "SYSTEM"),
  disburseCampaign,
);

export default router;
