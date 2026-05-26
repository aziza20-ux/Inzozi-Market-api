import express from "express";
import { authenticate } from "../../middleware/auth.js";
import { requireRole } from "../../middleware/requireRole.js";
import { requireVerified } from "../../middleware/requireVerified.js";
import {
  mockProviderCallback,
  withdraw,
} from "../../controllers/payment.controllers.js";

const router = express.Router();

// POST /v1/payments/withdraw
router.post(
  "/withdraw",
  authenticate,
  requireVerified,
  requireRole("CREATOR"),
  withdraw,
);

// POST /v1/payments/mock-provider/callback
router.post("/mock-provider/callback", mockProviderCallback);
import { Router } from 'express';
import { createPayment, getPaymentById, getPayments } from '../../controllers/payment.controller';
import {authenticate} from "../../middleware/auth"


const router = Router();

router.post('/', authenticate, createPayment);
router.get('/', authenticate, getPayments);
router.get('/:id', authenticate, getPaymentById);

export default router;
