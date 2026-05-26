"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_js_1 = require("../../middleware/auth.js");
const requireVerified_js_1 = require("../../middleware/requireVerified.js");
const requireRole_js_1 = require("../../middleware/requireRole.js");
const content_controller_js_1 = require("../../controllers/content.controller.js");
const router = express_1.default.Router();
// POST /v1/content/upload-url
router.post("/upload-url", auth_js_1.authenticate, requireVerified_js_1.requireVerified, (0, requireRole_js_1.requireRole)("CREATOR"), content_controller_js_1.generateContentUploadUrl);
// POST /v1/content
router.post("/", auth_js_1.authenticate, requireVerified_js_1.requireVerified, (0, requireRole_js_1.requireRole)("CREATOR"), content_controller_js_1.createContent);
// GET /v1/content
router.get("/", content_controller_js_1.getContentList);
// GET /v1/content/:id
router.get("/:id", content_controller_js_1.getContent);
// PATCH /v1/content/:id
router.patch("/:id", auth_js_1.authenticate, (0, requireRole_js_1.requireRole)("CREATOR"), content_controller_js_1.patchContent);
// DELETE /v1/content/:id
router.delete("/:id", auth_js_1.authenticate, (0, requireRole_js_1.requireRole)("CREATOR", "ADMIN"), content_controller_js_1.deleteContent);
// PATCH /v1/content/:id/moderation (admin)
router.patch("/:id/moderation", auth_js_1.authenticate, (0, requireRole_js_1.requireRole)("ADMIN"), content_controller_js_1.moderationUpdate);
// GET /v1/creator-profiles/:id/content
router.get("/creator-profiles/:id/content", content_controller_js_1.getCreatorProfileContent);
exports.default = router;
