"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_js_1 = require("../../config/multer.js");
const auth_js_1 = require("../../middleware/auth.js");
const requireVerified_js_1 = require("../../middleware/requireVerified.js");
const requireRole_js_1 = require("../../middleware/requireRole.js");
const content_controllers_js_1 = require("../../controllers/content.controllers.js");
const upload_controllers_js_1 = require("../../controllers/upload.controllers.js");
const router = express_1.default.Router();
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
router.post("/upload-url", auth_js_1.authenticate, requireVerified_js_1.requireVerified, (0, requireRole_js_1.requireRole)("CREATOR"), content_controllers_js_1.generateContentUploadUrl);
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
router.post("/media", auth_js_1.authenticate, requireVerified_js_1.requireVerified, (0, requireRole_js_1.requireRole)("CREATOR"), multer_js_1.mediaUpload.single("media"), upload_controllers_js_1.uploadCreatorMedia);
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
router.post("/", auth_js_1.authenticate, requireVerified_js_1.requireVerified, (0, requireRole_js_1.requireRole)("CREATOR"), multer_js_1.mediaUpload.single("media"), content_controllers_js_1.createContent);
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
router.get("/", content_controllers_js_1.getContentList);
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
router.get("/:id", content_controllers_js_1.getContent);
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
router.put("/:id", auth_js_1.authenticate, (0, requireRole_js_1.requireRole)("CREATOR"), content_controllers_js_1.patchContent);
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
router.delete("/:id", auth_js_1.authenticate, (0, requireRole_js_1.requireRole)("CREATOR", "ADMIN"), content_controllers_js_1.deleteContent);
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
router.patch("/:id/moderation", auth_js_1.authenticate, (0, requireRole_js_1.requireRole)("ADMIN"), content_controllers_js_1.moderationUpdate);
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
router.get("/creator-profiles/:id/content", content_controllers_js_1.getCreatorProfileContent);
exports.default = router;
