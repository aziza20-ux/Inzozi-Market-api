"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const mockPrisma = {
    user: {
        findUnique: globals_1.jest.fn(),
    },
    message: {
        create: globals_1.jest.fn(),
        findFirst: globals_1.jest.fn(),
        findMany: globals_1.jest.fn(),
        update: globals_1.jest.fn(),
    },
};
globals_1.jest.mock('../config/prisma.js', () => ({
    __esModule: true,
    default: mockPrisma,
}));
const message_controller_js_1 = require("../controllers/message.controller.js");
function createResponse() {
    return {
        status: globals_1.jest.fn().mockReturnThis(),
        json: globals_1.jest.fn().mockReturnThis(),
    };
}
(0, globals_1.describe)('Messages', () => {
    (0, globals_1.beforeEach)(() => {
        globals_1.jest.clearAllMocks();
    });
    (0, globals_1.it)('blocks consumers from initiating messages', async () => {
        const req = {
            user: { id: 'consumer-1', role: 'CONSUMER' },
            body: { recipientId: 'creator-1', message: 'Hello' },
        };
        const res = createResponse();
        await (0, message_controller_js_1.createMessage)(req, res);
        (0, globals_1.expect)(res.status).toHaveBeenCalledWith(403);
        (0, globals_1.expect)(res.json).toHaveBeenCalledWith({
            error: 'CONSUMER_CANNOT_INITIATE',
        });
        (0, globals_1.expect)(mockPrisma.message.create).not.toHaveBeenCalled();
    });
    (0, globals_1.it)('derives a deterministic conversation ID by sorting and hashing user IDs', () => {
        const fromA = (0, message_controller_js_1.deriveConversationId)('user-b', 'user-a');
        const fromB = (0, message_controller_js_1.deriveConversationId)('user-a', 'user-b');
        (0, globals_1.expect)(fromA).toBe(fromB);
        (0, globals_1.expect)(fromA).toMatch(/^[a-f0-9]{32}$/);
    });
    (0, globals_1.it)('creates messages with the derived conversation ID', async () => {
        mockPrisma.user.findUnique.mockResolvedValue({ id: 'user-b' });
        mockPrisma.message.create.mockResolvedValue({
            id: 'message-1',
            senderId: 'user-a',
            receiverId: 'user-b',
            conversationId: (0, message_controller_js_1.deriveConversationId)('user-a', 'user-b'),
            message: 'Hello',
        });
        const req = {
            user: { id: 'user-a', role: 'CREATOR' },
            body: { recipientId: 'user-b', message: 'Hello' },
        };
        const res = createResponse();
        await (0, message_controller_js_1.createMessage)(req, res);
        (0, globals_1.expect)(mockPrisma.message.create).toHaveBeenCalledWith(globals_1.expect.objectContaining({
            data: globals_1.expect.objectContaining({
                senderId: 'user-a',
                receiverId: 'user-b',
                conversationId: (0, message_controller_js_1.deriveConversationId)('user-b', 'user-a'),
                message: 'Hello',
            }),
        }));
        (0, globals_1.expect)(res.status).toHaveBeenCalledWith(201);
    });
});
