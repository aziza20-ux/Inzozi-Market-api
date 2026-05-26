"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mockPrisma = {
    user: {
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    },
    creatorProfile: {
        findUnique: jest.fn(),
    },
    content: {
        findFirst: jest.fn(),
        update: jest.fn(),
    },
    campaign: {
        create: jest.fn(),
        findFirst: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
    },
    application: {
        findMany: jest.fn(),
    },
    paymentTransaction: {
        create: jest.fn(),
        findMany: jest.fn(),
        update: jest.fn(),
    },
    message: {
        create: jest.fn(),
    },
};
jest.mock("../config/prisma.js", () => ({
    __esModule: true,
    default: mockPrisma,
}));
jest.mock("../services/mockMobileMoneyProvider.js", () => ({
    __esModule: true,
    requestMobileMoneyTransfer: jest.fn(async ({ transactionRef }) => ({
        providerRef: `mock_${transactionRef}`,
        status: "pending",
    })),
}));
const app_js_1 = __importDefault(require("../app.js"));
process.env.JWT_SECRET = "integration-secret";
function token(payload) {
    return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET);
}
const businessToken = token({
    id: "business-1",
    email: "business@example.com",
    role: "BUSINESS",
    verificationStatus: "VERIFIED",
});
const creatorToken = token({
    id: "creator-1",
    email: "creator@example.com",
    role: "CREATOR",
    verificationStatus: "VERIFIED",
});
const adminToken = token({
    id: "admin-1",
    email: "admin@example.com",
    role: "ADMIN",
    verificationStatus: "VERIFIED",
});
const consumerToken = token({
    id: "consumer-1",
    email: "consumer@example.com",
    role: "CONSUMER",
    verificationStatus: "VERIFIED",
});
describe("Core integration rules", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("covers register -> verify -> login -> refresh -> logout auth flow", async () => {
        const hashedPassword = await bcrypt_1.default.hash("password123", 10);
        mockPrisma.user.findUnique
            .mockResolvedValueOnce(null)
            .mockResolvedValueOnce({
            id: "auth-user-1",
            name: "Auth User",
            email: "auth@example.com",
            password: hashedPassword,
            role: "CREATOR",
            verificationStatus: "VERIFIED",
        })
            .mockResolvedValueOnce({
            id: "auth-user-1",
            name: "Auth User",
            email: "auth@example.com",
            password: hashedPassword,
            role: "CREATOR",
            verificationStatus: "VERIFIED",
        });
        mockPrisma.user.create.mockResolvedValue({
            id: "auth-user-1",
            name: "Auth User",
            email: "auth@example.com",
            password: hashedPassword,
            role: "CREATOR",
            verificationStatus: "PENDING",
        });
        mockPrisma.user.update.mockResolvedValue({
            id: "auth-user-1",
            name: "Auth User",
            email: "auth@example.com",
            password: hashedPassword,
            role: "CREATOR",
            verificationStatus: "VERIFIED",
        });
        await (0, supertest_1.default)(app_js_1.default)
            .post("/api/v1/auth/register")
            .send({
            name: "Auth User",
            email: "auth@example.com",
            password: "password123",
            role: "CREATOR",
        })
            .expect(201);
        await (0, supertest_1.default)(app_js_1.default)
            .patch("/api/v1/auth/verify")
            .send({ email: "auth@example.com" })
            .expect(200);
        const login = await (0, supertest_1.default)(app_js_1.default)
            .post("/api/v1/auth/login")
            .send({ email: "auth@example.com", password: "password123" })
            .expect(200);
        expect(login.body.accessToken).toBeTruthy();
        expect(login.body.refreshToken).toBeTruthy();
        const refreshed = await (0, supertest_1.default)(app_js_1.default)
            .post("/api/v1/auth/refresh")
            .send({ refreshToken: login.body.refreshToken })
            .expect(200);
        expect(refreshed.body.accessToken).toBeTruthy();
        await (0, supertest_1.default)(app_js_1.default)
            .post("/api/v1/auth/logout")
            .send({ refreshToken: refreshed.body.refreshToken })
            .expect(204);
    });
    it("enforces roles on protected route categories", async () => {
        await (0, supertest_1.default)(app_js_1.default)
            .post("/api/v1/content")
            .set("Authorization", `Bearer ${businessToken}`)
            .send({})
            .expect(403);
        await (0, supertest_1.default)(app_js_1.default)
            .post("/api/v1/campaigns")
            .set("Authorization", `Bearer ${creatorToken}`)
            .send({})
            .expect(403);
        await (0, supertest_1.default)(app_js_1.default)
            .post("/api/v1/payments/withdraw")
            .set("Authorization", `Bearer ${businessToken}`)
            .send({ amount: 100 })
            .expect(403);
    });
    it("guards content moderation state transitions", async () => {
        mockPrisma.content.findFirst
            .mockResolvedValueOnce({ id: "content-1", moderationStatus: "PENDING" })
            .mockResolvedValueOnce({ id: "content-1", moderationStatus: "APPROVED" });
        mockPrisma.content.update.mockResolvedValue({
            id: "content-1",
            moderationStatus: "APPROVED",
        });
        await (0, supertest_1.default)(app_js_1.default)
            .patch("/api/v1/content/content-1/moderation")
            .set("Authorization", `Bearer ${adminToken}`)
            .send({ moderationStatus: "APPROVED" })
            .expect(200);
        await (0, supertest_1.default)(app_js_1.default)
            .patch("/api/v1/content/content-1/moderation")
            .set("Authorization", `Bearer ${adminToken}`)
            .send({ moderationStatus: "REJECTED", rejectionReason: "Policy" })
            .expect(400)
            .expect(({ body }) => {
            expect(body.error).toBe("INVALID_MODERATION_STATE");
        });
    });
    it("enforces campaign budget integrity and status transition guards", async () => {
        await (0, supertest_1.default)(app_js_1.default)
            .post("/api/v1/campaigns")
            .set("Authorization", `Bearer ${businessToken}`)
            .send({
            title: "Tiny budget",
            budget: 1,
            niche_filter: "fashion",
            min_audience_size: 0,
            max_creators: 2,
            startDate: "2026-06-01T00:00:00.000Z",
            endDate: "2026-06-30T00:00:00.000Z",
        })
            .expect(400)
            .expect(({ body }) => {
            expect(body.error).toBe("CAMPAIGN_BUDGET_TOO_LOW");
        });
        mockPrisma.campaign.findFirst
            .mockResolvedValueOnce({
            id: "campaign-1",
            businessId: "business-1",
            status: "DRAFT",
        })
            .mockResolvedValueOnce({
            id: "campaign-1",
            businessId: "business-1",
            status: "CANCELLED",
        });
        mockPrisma.campaign.update.mockResolvedValue({
            id: "campaign-1",
            status: "ACTIVE",
        });
        await (0, supertest_1.default)(app_js_1.default)
            .patch("/api/v1/campaigns/campaign-1/status")
            .set("Authorization", `Bearer ${businessToken}`)
            .send({ status: "COMPLETED" })
            .expect(400)
            .expect(({ body }) => {
            expect(body.error).toBe("INVALID_CAMPAIGN_STATUS_TRANSITION");
        });
        await (0, supertest_1.default)(app_js_1.default)
            .patch("/api/v1/campaigns/campaign-1/status")
            .set("Authorization", `Bearer ${businessToken}`)
            .send({ status: "ACTIVE" })
            .expect(400)
            .expect(({ body }) => {
            expect(body.error).toBe("CAMPAIGN_STATUS_TERMINAL");
        });
    });
    it("replays idempotency keys for in-progress and completed campaign disbursements", async () => {
        mockPrisma.campaign.findUnique.mockResolvedValue({
            id: "campaign-1",
            businessId: "business-1",
            status: "IN_PROGRESS",
            budget: 100,
            applications: [{ creatorId: "creator-1", creator: { creatorProfile: { payout_account: "momo" } } }],
        });
        mockPrisma.paymentTransaction.findMany
            .mockResolvedValueOnce([
            {
                id: "tx-pending",
                paymentStatus: "PENDING",
                idempotencyKey: "same-key",
            },
        ])
            .mockResolvedValueOnce([
            {
                id: "tx-completed",
                paymentStatus: "COMPLETED",
                idempotencyKey: "same-key",
            },
        ]);
        await (0, supertest_1.default)(app_js_1.default)
            .post("/api/v1/campaigns/campaign-1/disburse")
            .set("Authorization", `Bearer ${businessToken}`)
            .set("idempotency-key", "same-key")
            .send({})
            .expect(202);
        await (0, supertest_1.default)(app_js_1.default)
            .post("/api/v1/campaigns/campaign-1/disburse")
            .set("Authorization", `Bearer ${businessToken}`)
            .set("idempotency-key", "same-key")
            .send({})
            .expect(200);
    });
    it("blocks withdrawals when creator payout_account is missing", async () => {
        mockPrisma.creatorProfile.findUnique.mockResolvedValue({
            userId: "creator-1",
            payout_account: null,
        });
        await (0, supertest_1.default)(app_js_1.default)
            .post("/api/v1/payments/withdraw")
            .set("Authorization", `Bearer ${creatorToken}`)
            .send({ amount: 1000 })
            .expect(400)
            .expect(({ body }) => {
            expect(body.error).toBe("PAYOUT_ACCOUNT_MISSING");
        });
    });
    it("blocks consumers from initiating messages", async () => {
        await (0, supertest_1.default)(app_js_1.default)
            .post("/api/v1/messages")
            .set("Authorization", `Bearer ${consumerToken}`)
            .send({ recipientId: "creator-1", message: "Hello" })
            .expect(403)
            .expect(({ body }) => {
            expect(body.error).toBe("CONSUMER_CANNOT_INITIATE");
        });
    });
});
//# sourceMappingURL=core.integration.test.js.map