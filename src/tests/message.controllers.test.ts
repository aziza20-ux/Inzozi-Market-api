import { describe, expect, it, jest, beforeEach } from "@jest/globals";

const mockPrisma = {
  user: {
    findUnique: jest.fn<(args: unknown) => Promise<unknown>>(),
  },
  message: {
    create: jest.fn<(args: unknown) => Promise<unknown>>(),
    findFirst: jest.fn<(args: unknown) => Promise<unknown>>(),
    findMany: jest.fn<(args: unknown) => Promise<unknown>>(),
    update: jest.fn<(args: unknown) => Promise<unknown>>(),
  },
};

jest.mock('../config/prisma.js', () => ({
  __esModule: true,
  default: mockPrisma,
}));

import { createMessage, deriveConversationId } from '../controllers/message.controller.js';

function createResponse() {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  } as any;
}

describe('Messages', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('blocks consumers from initiating messages', async () => {
    const req = {
      user: { id: 'consumer-1', role: 'CONSUMER' },
      body: { recipientId: 'creator-1', message: 'Hello' },
    } as any;
    const res = createResponse();

    await createMessage(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      error: 'CONSUMER_CANNOT_INITIATE',
    });
    expect(mockPrisma.message.create).not.toHaveBeenCalled();
  });

  it('derives a deterministic conversation ID by sorting and hashing user IDs', () => {
    const fromA = deriveConversationId('user-b', 'user-a');
    const fromB = deriveConversationId('user-a', 'user-b');

    expect(fromA).toBe(fromB);
    expect(fromA).toMatch(/^[a-f0-9]{32}$/);
  });

  it('creates messages with the derived conversation ID', async () => {
    mockPrisma.user.findUnique.mockResolvedValue({ id: 'user-b' });
    mockPrisma.message.create.mockResolvedValue({
      id: 'message-1',
      senderId: 'user-a',
      receiverId: 'user-b',
      conversationId: deriveConversationId('user-a', 'user-b'),
      message: 'Hello',
    });

    const req = {
      user: { id: 'user-a', role: 'CREATOR' },
      body: { recipientId: 'user-b', message: 'Hello' },
    } as any;
    const res = createResponse();

    await createMessage(req, res);

    expect(mockPrisma.message.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          senderId: 'user-a',
          receiverId: 'user-b',
          conversationId: deriveConversationId('user-b', 'user-a'),
          message: 'Hello',
        }),
      }),
    );
    expect(res.status).toHaveBeenCalledWith(201);
  });
});
