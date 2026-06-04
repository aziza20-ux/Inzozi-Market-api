import { Router } from "express";
import { respondToApplication } from "../../controllers/application.controller.js";
import { authenticate } from "../../middleware/auth.js";

const router = Router();

router.patch("/:id/respond", authenticate, respondToApplication);

export default router;
