"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const campaign_controller_js_1 = require("../../controllers/campaign.controller.js");
const payment_controllers_js_1 = require("../../controllers/payment.controllers.js");
const auth_js_1 = require("../../middleware/auth.js");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /campaigns:
 *   post:
 *     tags:
 *       - Campaigns
 *     summary: Create a campaign
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, budget, niche_filter, min_audience_size, max_creators]
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               budget:
 *                 type: number
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               deadline_at:
 *                 type: string
 *                 format: date-time
 *               niche_filter:
 *                 type: string
 *               min_audience_size:
 *                 type: number
 *               max_creators:
 *                 type: number
 *     responses:
 *       201:
 *         description: Campaign created
 */
router.post("/", auth_js_1.authenticate, campaign_controller_js_1.createCampaign);
/**
 * @openapi
 * /campaigns:
 *   get:
 *     tags:
 *       - Campaigns
 *     summary: List campaigns
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *       - in: query
 *         name: niche
 *         schema:
 *           type: string
 *       - in: query
 *         name: min_audience_size
 *         schema:
 *           type: string
 *       - in: query
 *         name: cursor
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Campaign list
 */
router.get("/", campaign_controller_js_1.getCampaigns);
/**
 * @openapi
 * /campaigns/{id}:
 *   get:
 *     tags:
 *       - Campaigns
 *     summary: Get a campaign by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Campaign details
 *       404:
 *         description: Campaign not found
 */
router.get("/:id", auth_js_1.authenticate, campaign_controller_js_1.getCampaignById);
/**
 * @openapi
 * /campaigns/{id}:
 *   put:
 *     tags:
 *       - Campaigns
 *     summary: Update a draft campaign
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               budget:
 *                 type: number
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               deadline_at:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Updated campaign
 */
router.put("/:id", auth_js_1.authenticate, campaign_controller_js_1.updateCampaign);
/**
 * @openapi
 * /campaigns/{id}/status:
 *   patch:
 *     tags:
 *       - Campaigns
 *     summary: Update campaign status
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [status]
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated campaign status
 */
router.patch("/:id/status", auth_js_1.authenticate, campaign_controller_js_1.updateCampaignStatus);
/**
 * @openapi
 * /campaigns/{id}/disburse:
 *   post:
 *     tags:
 *       - Campaigns
 *     summary: Disburse campaign funds to accepted creators
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       201:
 *         description: Disbursement created
 */
router.post("/:id/disburse", auth_js_1.authenticate, payment_controllers_js_1.disburseCampaign);
/**
 * @openapi
 * /campaigns/{id}:
 *   delete:
 *     tags:
 *       - Campaigns
 *     summary: Delete a campaign
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Campaign deleted
 */
router.delete("/:id", auth_js_1.authenticate, campaign_controller_js_1.deleteCampaign);
exports.default = router;
