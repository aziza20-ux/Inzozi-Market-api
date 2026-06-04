"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_js_1 = require("../../middleware/auth.js");
const requireRole_js_1 = require("../../middleware/requireRole.js");
const requireVerified_js_1 = require("../../middleware/requireVerified.js");
const payment_controller_js_1 = require("../../controllers/payment.controller.js");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /payments:
 *   post:
 *     tags:
 *       - Payments
 *     summary: Create a payment transaction
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: idempotency-key
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [amount, paymentType]
 *             properties:
 *               amount:
 *                 type: number
 *               paymentType:
 *                 type: string
 *     responses:
 *       201:
 *         description: Payment created
 */
router.post("/", auth_js_1.authenticate, payment_controller_js_1.createPayment);
/**
 * @openapi
 * /payments:
 *   get:
 *     tags:
 *       - Payments
 *     summary: List the authenticated user's payments
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *       - in: query
 *         name: status
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
 *         description: Payment list
 */
router.get("/", auth_js_1.authenticate, payment_controller_js_1.getPayments);
/**
 * @openapi
 * /payments/{id}:
 *   get:
 *     tags:
 *       - Payments
 *     summary: Get a payment by ID
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
 *         description: Payment details
 *       404:
 *         description: Payment not found
 */
router.get("/:id", auth_js_1.authenticate, payment_controller_js_1.getPaymentById);
/**
 * @openapi
 * /payments/withdraw:
 *   post:
 *     tags:
 *       - Payments
 *     summary: Withdraw creator earnings
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [amount]
 *             properties:
 *               amount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Withdrawal created
 */
router.post("/withdraw", auth_js_1.authenticate, requireVerified_js_1.requireVerified, (0, requireRole_js_1.requireRole)("CREATOR"), payment_controller_js_1.withdraw);
/**
 * @openapi
 * /payments/mock-provider/callback:
 *   post:
 *     tags:
 *       - Payments
 *     summary: Mock provider callback used for local testing
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               transactionRef:
 *                 type: string
 *               providerRef:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Matching payments updated
 */
router.post("/mock-provider/callback", payment_controller_js_1.mockProviderCallback);
exports.default = router;
