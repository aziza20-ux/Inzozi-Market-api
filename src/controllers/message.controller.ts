<<<<<<< HEAD
import type { Request, Response } from "express";
import { createHash } from "crypto";
import prisma from "../config/prisma.js";
import { AuthRequest } from "../middleware/auth.js";
=======
import type { Request, Response } from 'express';
import { createHash } from 'crypto';
import prisma from '../config/prisma.js';
import type { AuthUser } from '../types/express.js';
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848

const DEFAULT_PAGE_SIZE = 25;
const MAX_PAGE_SIZE = 100;

export function deriveConversationId(userA: string, userB: string) {
  const [first, second] = [userA, userB].sort();
  return createHash('md5').update(`${first}:${second}`).digest('hex');
}

function parsePagination(query: Request['query']) {
  const rawLimit = Number(query.limit ?? DEFAULT_PAGE_SIZE);
  const rawOffset = Number(query.offset ?? 0);

  const limit =
    Number.isFinite(rawLimit) && rawLimit > 0
      ? Math.min(Math.floor(rawLimit), MAX_PAGE_SIZE)
      : DEFAULT_PAGE_SIZE;
  const offset = Number.isFinite(rawOffset) && rawOffset > 0 ? Math.floor(rawOffset) : 0;

  return { limit, offset };
}

function isParticipant(message: { senderId: string; receiverId: string }, userId: string) {
  return message.senderId === userId || message.receiverId === userId;
}

function getAuthenticatedUser(req: Request): Pick<AuthUser, 'id' | 'role'> | null {
  const id = req.user?.id ?? req.userId;
  const role = req.user?.role ?? req.role;

  if (!id || !role) return null;
  return { id, role };
}

const userSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  profileImage: true,
};

export async function createMessage(req: AuthRequest, res: Response) {
  try {
<<<<<<< HEAD
    const userId = req.userId;
    if (!userId) return res.status(401).json({ error: "UNAUTHORIZED" });
    if (req.role === "CONSUMER") {
      return res.status(403).json({ error: "CONSUMER_CANNOT_INITIATE" });
    }
=======
    const user = getAuthenticatedUser(req);
    if (!user) return res.status(401).json({ error: 'UNAUTHORIZED' });
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848

    const receiverId = req.body?.receiverId ?? req.body?.recipientId;
    const message = req.body?.message;

    if (!receiverId || !message) {
      return res.status(400).json({ error: 'RECIPIENT_AND_MESSAGE_REQUIRED' });
    }
<<<<<<< HEAD
    if (String(receiverId) === userId) {
      return res.status(400).json({ error: "SENDER_AND_RECIPIENT_MUST_DIFFER" });
=======
    if (String(receiverId) === user.id) {
      return res.status(400).json({ error: 'SENDER_AND_RECIPIENT_MUST_DIFFER' });
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848
    }

    const receiver = await prisma.user.findUnique({
      where: { id: String(receiverId) },
      select: {
        id: true,
        role: true,
      },
    });
    if (!receiver) return res.status(404).json({ error: 'RECIPIENT_NOT_FOUND' });

    //if (user.role === 'CONSUMER') {
     // if (receiver.role !== 'CREATOR') {
     //   return res.status(403).json({ error: 'FAN_CAN_ONLY_MESSAGE_CREATORS' });
    //  }
   // }

    const conversationId = deriveConversationId(userId, receiver.id);
    const created = await prisma.message.create({
      data: {
        senderId: userId,
        receiverId: receiver.id,
        conversationId,
        message: String(message),
      },
      include: {
        sender: { select: userSelect },
        receiver: { select: userSelect },
      },
    });

    return res.status(201).json(created);
  } catch (e) {
    return res.status(500).json({ error: 'INTERNAL_SERVER_ERROR' });
  }
}

export async function listConversations(req: AuthRequest, res: Response) {
  try {
<<<<<<< HEAD
    const userId = req.userId;
    if (!userId) return res.status(401).json({ error: "UNAUTHORIZED" });
=======
    const user = getAuthenticatedUser(req);
    if (!user) return res.status(401).json({ error: 'UNAUTHORIZED' });
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848

    const messages = await prisma.message.findMany({
      where: {
        deletedAt: null,
        OR: [{ senderId: userId }, { receiverId: userId }],
      },
      orderBy: { createdAt: 'desc' },
      include: {
        sender: { select: userSelect },
        receiver: { select: userSelect },
      },
    });

    const conversations = new Map<string, any>();
    for (const message of messages) {
      if (conversations.has(message.conversationId)) continue;
<<<<<<< HEAD
      const otherUser =
        message.senderId === userId ? message.receiver : message.sender;
=======
      const otherUser = message.senderId === user.id ? message.receiver : message.sender;
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848
      conversations.set(message.conversationId, {
        conversationId: message.conversationId,
        participant: otherUser,
        latestMessage: {
          id: message.id,
          senderId: message.senderId,
          receiverId: message.receiverId,
          message: message.message,
          readAt: message.readAt,
          createdAt: message.createdAt,
        },
      });
    }

    return res.json(Array.from(conversations.values()));
  } catch (e) {
    return res.status(500).json({ error: 'INTERNAL_SERVER_ERROR' });
  }
}

export async function getMessages(req: Request, res: Response) {
  try {
    const user = getAuthenticatedUser(req);
    if (!user) return res.status(401).json({ error: 'UNAUTHORIZED' });

    const { limit, offset } = parsePagination(req.query);
    const messages = await prisma.message.findMany({
      where: {
        deletedAt: null,
        OR: [{ senderId: user.id }, { receiverId: user.id }],
      },
      orderBy: { createdAt: 'desc' },
      skip: offset,
      take: limit,
      include: {
        sender: { select: userSelect },
        receiver: { select: userSelect },
      },
    });

    return res.json({
      pagination: { limit, offset },
      messages,
    });
  } catch (e) {
    return res.status(500).json({ error: 'INTERNAL_SERVER_ERROR' });
  }
}

export async function getConversationThread(req: AuthRequest, res: Response) {
  try {
<<<<<<< HEAD
    const userId = req.userId;
    if (!userId) return res.status(401).json({ error: "UNAUTHORIZED" });
=======
    const user = getAuthenticatedUser(req);
    if (!user) return res.status(401).json({ error: 'UNAUTHORIZED' });
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848

    const convId = typeof req.params.convId === 'string' ? req.params.convId : undefined;
    if (!convId) {
      return res.status(400).json({ error: 'INVALID_CONVERSATION_ID' });
    }

    const participantMessage = await prisma.message.findFirst({
      where: {
        conversationId: convId,
        OR: [{ senderId: userId }, { receiverId: userId }],
      },
      select: { id: true },
    });

    if (!participantMessage) {
      return res.status(403).json({ error: 'CONVERSATION_ACCESS_DENIED' });
    }

    const { limit, offset } = parsePagination(req.query);
    const messages = await prisma.message.findMany({
      where: { conversationId: convId, deletedAt: null },
      orderBy: { createdAt: 'asc' },
      skip: offset,
      take: limit,
      include: {
        sender: { select: userSelect },
        receiver: { select: userSelect },
      },
    });

    return res.json({
      conversationId: convId,
      pagination: { limit, offset },
      messages,
    });
  } catch (e) {
    return res.status(500).json({ error: 'INTERNAL_SERVER_ERROR' });
  }
}

export async function markMessageRead(req: AuthRequest, res: Response) {
  try {
<<<<<<< HEAD
    const userId = req.userId;
    if (!userId) return res.status(401).json({ error: "UNAUTHORIZED" });
=======
    const user = getAuthenticatedUser(req);
    if (!user) return res.status(401).json({ error: 'UNAUTHORIZED' });
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848

    const id = typeof req.params.id === 'string' ? req.params.id : undefined;
    if (!id) return res.status(400).json({ error: 'INVALID_MESSAGE_ID' });

    const message = await prisma.message.findFirst({
      where: { id, deletedAt: null },
    });
<<<<<<< HEAD
    if (!message) return res.status(404).json({ error: "MESSAGE_NOT_FOUND" });
    if (!isParticipant(message, userId)) {
      return res.status(403).json({ error: "MESSAGE_ACCESS_DENIED" });
=======
    if (!message) return res.status(404).json({ error: 'MESSAGE_NOT_FOUND' });
    if (!isParticipant(message, user.id)) {
      return res.status(403).json({ error: 'MESSAGE_ACCESS_DENIED' });
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848
    }

    const updated = await prisma.message.update({
      where: { id },
      data: { readAt: new Date(), isRead: true },
    });

    return res.json(updated);
  } catch (e) {
    return res.status(500).json({ error: 'INTERNAL_SERVER_ERROR' });
  }
}

export async function deleteMessage(req: AuthRequest, res: Response) {
  try {
<<<<<<< HEAD
    const userId = req.userId;
    if (!userId) return res.status(401).json({ error: "UNAUTHORIZED" });
=======
    const user = getAuthenticatedUser(req);
    if (!user) return res.status(401).json({ error: 'UNAUTHORIZED' });
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848

    const id = typeof req.params.id === 'string' ? req.params.id : undefined;
    if (!id) return res.status(400).json({ error: 'INVALID_MESSAGE_ID' });

    const message = await prisma.message.findFirst({
      where: { id },
    });
<<<<<<< HEAD
    if (!message) return res.status(404).json({ error: "MESSAGE_NOT_FOUND" });
    if (!isParticipant(message, userId)) {
      return res.status(403).json({ error: "MESSAGE_ACCESS_DENIED" });
=======
    if (!message) return res.status(404).json({ error: 'MESSAGE_NOT_FOUND' });
    if (!isParticipant(message, user.id)) {
      return res.status(403).json({ error: 'MESSAGE_ACCESS_DENIED' });
>>>>>>> facc8304788f6ce43a2cc834e7417930d49b0848
    }

    const updated = await prisma.message.update({
      where: { id },
      data: { deletedAt: new Date() },
    });

    return res.json(updated);
  } catch (e) {
    return res.status(500).json({ error: 'INTERNAL_SERVER_ERROR' });
  }
}

export default {
  createMessage,
  listConversations,
  getConversationThread,
  markMessageRead,
  deleteMessage,
};
