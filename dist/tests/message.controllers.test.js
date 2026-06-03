"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockPrisma = {
    user: {
        findUnique: jest.fn(),
    },
    message: {
        create: jest.fn(),
        findFirst: jest.fn(),
        findMany: jest.fn(),
        update: jest.fn(),
    },
    subscription: {
        findFirst: jest.fn(),
    },
};
jest.mock("../config/prisma.js", () => ({
    __esModule: true,
    default: mockPrisma,
}));
const message_controller_js_1 = require("../controllers/message.controller.js");
function createResponse() {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
    };
}
describe("Messages", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("blocks fans from messaging paid creators without an active subscription", async () => {
        mockPrisma.user.findUnique.mockResolvedValue({
            id: "creator-1",
            role: "CREATOR",
            creatorProfile: { subscriptionFee: 10 },
        });
        mockPrisma.subscription.findFirst.mockResolvedValue(null);
        const req = {
            user: { id: "consumer-1", role: "CONSUMER" },
            body: { recipientId: "creator-1", message: "Hello" },
        };
        const res = createResponse();
        await (0, message_controller_js_1.createMessage)(req, res);
        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith({
            error: "FAN_MUST_SUBSCRIBE_TO_MESSAGE",
        });
        expect(mockPrisma.message.create).not.toHaveBeenCalled();
    });
    it("allows fans to message free creators", async () => {
        mockPrisma.user.findUnique.mockResolvedValue({
            id: "creator-1",
            role: "CREATOR",
            creatorProfile: { subscriptionFee: 0 },
        });
        mockPrisma.message.create.mockResolvedValue({
            id: "message-1",
            senderId: "consumer-1",
            receiverId: "creator-1",
            conversationId: (0, message_controller_js_1.deriveConversationId)("consumer-1", "creator-1"),
            message: "Hello",
        });
        const req = {
            user: { id: "consumer-1", role: "CONSUMER" },
            body: { recipientId: "creator-1", message: "Hello" },
        };
        const res = createResponse();
        await (0, message_controller_js_1.createMessage)(req, res);
        expect(mockPrisma.subscription.findFirst).not.toHaveBeenCalled();
        expect(mockPrisma.message.create).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(201);
    });
    it("allows fans to message paid creators with an active subscription", async () => {
        mockPrisma.user.findUnique.mockResolvedValue({
            id: "creator-1",
            role: "CREATOR",
            creatorProfile: { subscriptionFee: 10 },
        });
        mockPrisma.subscription.findFirst.mockResolvedValue({ id: "sub-1" });
        mockPrisma.message.create.mockResolvedValue({
            id: "message-1",
            senderId: "consumer-1",
            receiverId: "creator-1",
            conversationId: (0, message_controller_js_1.deriveConversationId)("consumer-1", "creator-1"),
            message: "Hello",
        });
        const req = {
            user: { id: "consumer-1", role: "CONSUMER" },
            body: { recipientId: "creator-1", message: "Hello" },
        };
        const res = createResponse();
        await (0, message_controller_js_1.createMessage)(req, res);
        expect(mockPrisma.subscription.findFirst).toHaveBeenCalledWith(expect.objectContaining({
            where: expect.objectContaining({
                subscriberId: "consumer-1",
                creatorId: "creator-1",
                status: "ACTIVE",
            }),
        }));
        expect(mockPrisma.message.create).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(201);
    });
    it("derives a deterministic conversation ID by sorting and hashing user IDs", () => {
        const fromA = (0, message_controller_js_1.deriveConversationId)("user-b", "user-a");
        const fromB = (0, message_controller_js_1.deriveConversationId)("user-a", "user-b");
        expect(fromA).toBe(fromB);
        expect(fromA).toMatch(/^[a-f0-9]{32}$/);
    });
    it("creates messages with the derived conversation ID", async () => {
        mockPrisma.user.findUnique.mockResolvedValue({
            id: "user-b",
            role: "BUSINESS",
            creatorProfile: null,
        });
        mockPrisma.message.create.mockResolvedValue({
            id: "message-1",
            senderId: "user-a",
            receiverId: "user-b",
            conversationId: (0, message_controller_js_1.deriveConversationId)("user-a", "user-b"),
            message: "Hello",
        });
        const req = {
            user: { id: "user-a", role: "CREATOR" },
            body: { recipientId: "user-b", message: "Hello" },
        };
        const res = createResponse();
        await (0, message_controller_js_1.createMessage)(req, res);
        expect(mockPrisma.message.create).toHaveBeenCalledWith(expect.objectContaining({
            data: expect.objectContaining({
                senderId: "user-a",
                receiverId: "user-b",
                conversationId: (0, message_controller_js_1.deriveConversationId)("user-b", "user-a"),
                message: "Hello",
            }),
        }));
        expect(res.status).toHaveBeenCalledWith(201);
    });
});
