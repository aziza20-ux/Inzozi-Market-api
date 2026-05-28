import { Router } from "express";
import { authenticate } from "../../middleware/auth.js";
import { requireRole } from "../../middleware/requireRole.js";
import { requireVerified } from "../../middleware/requireVerified.js";
import {
  createPayment,
  getPaymentById,
  getPayments,
  mockProviderCallback,
  withdraw,
} from "../../controllers/payment.controllers.js";

const router = Router();

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
router.post("/", authenticate, createPayment);

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
router.get("/", authenticate, getPayments);

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
router.get("/:id", authenticate, getPaymentById);

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
router.post(
  "/withdraw",
  authenticate,
  requireVerified,
  requireRole("CREATOR"),
  withdraw,
);

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
router.post("/mock-provider/callback", mockProviderCallback);

export default router;
