"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_js_1 = require("../../middleware/auth.js");
const requireRole_js_1 = require("../../middleware/requireRole.js");
const requireVerified_js_1 = require("../../middleware/requireVerified.js");
const campaign_controllers_js_1 = require("../../controllers/campaign.controllers.js");
const payment_controllers_js_1 = require("../../controllers/payment.controllers.js");
const router = express_1.default.Router();
// POST /v1/campaigns/:id/applications
router.post("/:id/applications", auth_js_1.authenticate, requireVerified_js_1.requireVerified, (0, requireRole_js_1.requireRole)("CREATOR"), campaign_controllers_js_1.applyToCampaign);
// GET /v1/campaigns/:id/applications
router.get("/:id/applications", auth_js_1.authenticate, (0, requireRole_js_1.requireRole)("BUSINESS", "ADMIN"), campaign_controllers_js_1.listCampaignApplications);
// PATCH /v1/campaigns/:id/applications/:appId
router.patch("/:id/applications/:appId", auth_js_1.authenticate, (0, requireRole_js_1.requireRole)("BUSINESS"), campaign_controllers_js_1.patchCampaignApplication);
// POST /v1/campaigns/:id/disburse
router.post("/:id/disburse", auth_js_1.authenticate, (0, requireRole_js_1.requireRole)("BUSINESS", "ADMIN", "SYSTEM"), payment_controllers_js_1.disburseCampaign);
exports.default = router;
//# sourceMappingURL=campaign.routes.js.map