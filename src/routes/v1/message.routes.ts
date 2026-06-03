import express from 'express';
import { authenticate } from '../../middleware/auth.js';
import {
  createMessage,
  deleteMessage,
  getConversationThread,
  getMessages,
  listConversations,
  markMessageRead,
} from '../../controllers/message.controller.js';

const messageRouter = express.Router();

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
<<<<<<< HEAD
messageRouter.post("/", authenticate, createMessage);
=======
router.post('/', authenticate, createMessage);

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
router.get('/', authenticate, getMessages);
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848

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
<<<<<<< HEAD
messageRouter.get("/conversations", authenticate, listConversations);
=======
router.get('/conversations', authenticate, listConversations);
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848

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
<<<<<<< HEAD
messageRouter.get("/conversations/:convId", authenticate, getConversationThread);
=======
router.get('/conversations/:convId', authenticate, getConversationThread);
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848

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
<<<<<<< HEAD
messageRouter.patch("/:id/read", authenticate, markMessageRead);
=======
router.patch('/:id/read', authenticate, markMessageRead);
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848

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
<<<<<<< HEAD
messageRouter.delete("/:id", authenticate, deleteMessage);
=======
router.delete('/:id', authenticate, deleteMessage);
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848

export default messageRouter;
