import express from "express";
import { mediaUpload } from "../../config/multer.js";
import { authenticate } from "../../middleware/auth.js";
import { requireVerified } from "../../middleware/requireVerified.js";
import { requireRole } from "../../middleware/requireRole.js";
import {
  createContent,
  deleteContent,
  generateContentUploadUrl,
  getContent,
  getContentList,
  getCreatorProfileContent,
  moderationUpdate,
  patchContent,
} from "../../controllers/content.controllers.js";
import { uploadCreatorMedia } from "../../controllers/upload.controllers.js";

const router = express.Router();

// POST /v1/content/upload-url
router.post(
  "/upload-url",
  authenticate,
  requireVerified,
  requireRole("CREATOR"),
  generateContentUploadUrl,
);

// POST /v1/content/media
router.post(
  "/media",
  authenticate,
  requireVerified,
  requireRole("CREATOR"),
  mediaUpload.single("media"),
  uploadCreatorMedia,
);

// POST /v1/content
router.post(
  "/",
  authenticate,
  requireVerified,
  requireRole("CREATOR"),
  mediaUpload.single("media"),
  createContent,
);

// GET /v1/content
router.get("/", getContentList);

// GET /v1/content/:id
router.get("/:id", getContent);

// PATCH /v1/content/:id
router.patch("/:id", authenticate, requireRole("CREATOR"), patchContent);

// DELETE /v1/content/:id
router.delete(
  "/:id",
  authenticate,
  requireRole("CREATOR", "ADMIN"),
  deleteContent,
);

// PATCH /v1/content/:id/moderation (admin)
router.patch(
  "/:id/moderation",
  authenticate,
  requireRole("ADMIN"),
  moderationUpdate,
);

// GET /v1/creator-profiles/:id/content
router.get("/creator-profiles/:id/content", getCreatorProfileContent);

export default router;
