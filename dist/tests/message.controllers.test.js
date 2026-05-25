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
};
jest.mock("../config/prisma.js", () => ({
    __esModule: true,
    default: mockPrisma,
}));
const message_controllers_js_1 = require("../controllers/message.controllers.js");
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
    it("blocks consumers from initiating messages", async () => {
        const req = {
            user: { id: "consumer-1", role: "CONSUMER" },
            body: { recipientId: "creator-1", message: "Hello" },
        };
        const res = createResponse();
        await (0, message_controllers_js_1.createMessage)(req, res);
        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith({
            error: "CONSUMER_CANNOT_INITIATE",
        });
        expect(mockPrisma.message.create).not.toHaveBeenCalled();
    });
    it("derives a deterministic conversation ID by sorting and hashing user IDs", () => {
        const fromA = (0, message_controllers_js_1.deriveConversationId)("user-b", "user-a");
        const fromB = (0, message_controllers_js_1.deriveConversationId)("user-a", "user-b");
        expect(fromA).toBe(fromB);
        expect(fromA).toMatch(/^[a-f0-9]{32}$/);
    });
    it("creates messages with the derived conversation ID", async () => {
        mockPrisma.user.findUnique.mockResolvedValue({ id: "user-b" });
        mockPrisma.message.create.mockResolvedValue({
            id: "message-1",
            senderId: "user-a",
            receiverId: "user-b",
            conversationId: (0, message_controllers_js_1.deriveConversationId)("user-a", "user-b"),
            message: "Hello",
        });
        const req = {
            user: { id: "user-a", role: "CREATOR" },
            body: { recipientId: "user-b", message: "Hello" },
        };
        const res = createResponse();
        await (0, message_controllers_js_1.createMessage)(req, res);
        expect(mockPrisma.message.create).toHaveBeenCalledWith(expect.objectContaining({
            data: expect.objectContaining({
                senderId: "user-a",
                receiverId: "user-b",
                conversationId: (0, message_controllers_js_1.deriveConversationId)("user-b", "user-a"),
                message: "Hello",
            }),
        }));
        expect(res.status).toHaveBeenCalledWith(201);
    });
});
//# sourceMappingURL=message.controllers.test.js.map