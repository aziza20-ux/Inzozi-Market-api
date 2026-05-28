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

router.post("/", authenticate, createPayment);
router.get("/", authenticate, getPayments);
router.get("/:id", authenticate, getPaymentById);

router.post(
  "/withdraw",
  authenticate,
  requireVerified,
  requireRole("CREATOR"),
  withdraw,
);

router.post("/mock-provider/callback", mockProviderCallback);

export default router;
