import express from "express";
import { authenticate } from "../../middleware/auth.js";
import {
  createMessage,
  deleteMessage,
  getConversationThread,
  listConversations,
  markMessageRead,
} from "../../controllers/message.controller.js";

const router = express.Router();

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
router.post("/", authenticate, createMessage);

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
router.get("/conversations", authenticate, listConversations);

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
router.get("/conversations/:convId", authenticate, getConversationThread);

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
router.patch("/:id/read", authenticate, markMessageRead);

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
router.delete("/:id", authenticate, deleteMessage);

export default router;
