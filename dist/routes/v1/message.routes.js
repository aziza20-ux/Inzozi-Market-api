"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_js_1 = require("../../middleware/auth.js");
const message_controller_js_1 = require("../../controllers/message.controller.js");
const router = express_1.default.Router();
// POST /v1/messages
/**
 * @openapi
 * /messages:
 *   post:
 *     tags:
 *       - Messages
 *     summary: Send a message
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [message]
 *             properties:
 *               receiverId:
 *                 type: string
 *                 format: uuid
 *               recipientId:
 *                 type: string
 *                 format: uuid
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Message created
 */
router.post('/', auth_js_1.authenticate, message_controller_js_1.createMessage);
// GET /v1/messages
/**
 * @openapi
 * /messages:
 *   get:
 *     tags:
 *       - Messages
 *     summary: List messages for the authenticated user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 25
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *     responses:
 *       200:
 *         description: Message list
 */
router.get('/', auth_js_1.authenticate, message_controller_js_1.getMessages);
// GET /v1/messages/conversations
/**
 * @openapi
 * /messages/conversations:
 *   get:
 *     tags:
 *       - Messages
 *     summary: List conversations for the authenticated user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Conversation list
 */
router.get('/conversations', auth_js_1.authenticate, message_controller_js_1.listConversations);
// GET /v1/messages/conversations/:convId
/**
 * @openapi
 * /messages/conversations/{convId}:
 *   get:
 *     tags:
 *       - Messages
 *     summary: Get a conversation thread
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: convId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Conversation thread
 */
router.get('/conversations/:convId', auth_js_1.authenticate, message_controller_js_1.getConversationThread);
// PATCH /v1/messages/:id/read
/**
 * @openapi
 * /messages/{id}/read:
 *   patch:
 *     tags:
 *       - Messages
 *     summary: Mark a message as read
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
 *         description: Updated message
 */
router.patch('/:id/read', auth_js_1.authenticate, message_controller_js_1.markMessageRead);
// DELETE /v1/messages/:id
/**
 * @openapi
 * /messages/{id}:
 *   delete:
 *     tags:
 *       - Messages
 *     summary: Soft delete a message
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
 *         description: Updated message
 */
router.delete('/:id', auth_js_1.authenticate, message_controller_js_1.deleteMessage);
exports.default = router;
