import express from 'express';
import { authenticate } from '../../middleware/auth.js';
import {
  createMessage,
  deleteMessage,
  getConversationThread,
  listConversations,
  markMessageRead,
} from '../../controllers/message.controller.js';

const router = express.Router();

// POST /v1/messages
router.post('/', authenticate, createMessage);

// GET /v1/messages/conversations
router.get('/conversations', authenticate, listConversations);

// GET /v1/messages/conversations/:convId
router.get('/conversations/:convId', authenticate, getConversationThread);

// PATCH /v1/messages/:id/read
router.patch('/:id/read', authenticate, markMessageRead);

// DELETE /v1/messages/:id
router.delete('/:id', authenticate, deleteMessage);

export default router;
