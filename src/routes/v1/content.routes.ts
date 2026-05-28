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
/**
 * @openapi
 * /content/upload-url:
 *   post:
 *     tags:
 *       - Content
 *     summary: Generate a storage upload URL
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [filename, mimeType]
 *             properties:
 *               filename:
 *                 type: string
 *               mimeType:
 *                 type: string
 *     responses:
 *       201:
 *         description: Upload URL generated
 *       400:
 *         description: Missing filename or mimeType
 */
router.post(
  "/upload-url",
  authenticate,
  requireVerified,
  requireRole("CREATOR"),
  generateContentUploadUrl,
);

// POST /v1/content/media
/**
 * @openapi
 * /content/media:
 *   post:
 *     tags:
 *       - Content
 *     summary: Upload creator media to cloud storage
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               media:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Media uploaded
 */
router.post(
  "/media",
  authenticate,
  requireVerified,
  requireRole("CREATOR"),
  mediaUpload.single("media"),
  uploadCreatorMedia,
);

// POST /v1/content
/**
 * @openapi
 * /content:
 *   post:
 *     tags:
 *       - Content
 *     summary: Create content for the authenticated creator
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [title, type, visibility]
 *             properties:
 *               media:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               contentUrl:
 *                 type: string
 *               thumbnailUrl:
 *                 type: string
 *               type:
 *                 type: string
 *               visibility:
 *                 type: string
 *               price:
 *                 type: number
 *               currency:
 *                 type: string
 *     responses:
 *       201:
 *         description: Content created
 *       400:
 *         description: Invalid request body
 */
router.post(
  "/",
  authenticate,
  requireVerified,
  requireRole("CREATOR"),
  mediaUpload.single("media"),
  createContent,
);

// GET /v1/content
/**
 * @openapi
 * /content:
 *   get:
 *     tags:
 *       - Content
 *     summary: List public content
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *       - in: query
 *         name: visibility
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Content list
 */
router.get("/", getContentList);

// GET /v1/content/:id
/**
 * @openapi
 * /content/{id}:
 *   get:
 *     tags:
 *       - Content
 *     summary: Get content by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Content item
 *       404:
 *         description: Content not found
 */
router.get("/:id", getContent);

// PATCH /v1/content/:id
/**
 * @openapi
 * /content/{id}:
 *   put:
 *     tags:
 *       - Content
 *     summary: Update a content item
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
 *               contentUrl:
 *                 type: string
 *               thumbnailUrl:
 *                 type: string
 *               type:
 *                 type: string
 *               visibility:
 *                 type: string
 *               price:
 *                 type: number
 *               currency:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated content
 */
router.put("/:id", authenticate, requireRole("CREATOR"), patchContent);

// DELETE /v1/content/:id
/**
 * @openapi
 * /content/{id}:
 *   delete:
 *     tags:
 *       - Content
 *     summary: Delete content owned by the creator or an admin
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
 *       204:
 *         description: Content deleted
 */
router.delete(
  "/:id",
  authenticate,
  requireRole("CREATOR", "ADMIN"),
  deleteContent,
);

// PATCH /v1/content/:id/moderation (admin)
/**
 * @openapi
 * /content/{id}/moderation:
 *   patch:
 *     tags:
 *       - Content
 *     summary: Deprecated moderation endpoint
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
 *       404:
 *         description: Not found
 */
router.patch(
  "/:id/moderation",
  authenticate,
  requireRole("ADMIN"),
  moderationUpdate,
);

// GET /v1/creator-profiles/:id/content
/**
 * @openapi
 * /content/creator-profiles/{id}/content:
 *   get:
 *     tags:
 *       - Content
 *     summary: List content for a creator profile
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *       - in: query
 *         name: visibility
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Filtered content list
 */
router.get("/creator-profiles/:id/content", getCreatorProfileContent);

export default router;
