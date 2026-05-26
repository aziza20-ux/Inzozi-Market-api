"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockPrisma = {
    creatorProfile: {
        findUnique: jest.fn(),
    },
    campaign: {
        findUnique: jest.fn(),
    },
    paymentTransaction: {
        create: jest.fn(),
        findMany: jest.fn(),
        update: jest.fn(),
        updateMany: jest.fn(),
    },
};
const mockRequestMobileMoneyTransfer = jest.fn();
jest.mock("../config/prisma.js", () => ({
    __esModule: true,
    default: mockPrisma,
}));
jest.mock("../services/mockMobileMoneyProvider.js", () => ({
    __esModule: true,
    requestMobileMoneyTransfer: mockRequestMobileMoneyTransfer,
}));
const payment_controller_js_1 = require("../controllers/payment.controller.js");
function createResponse() {
    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
    };
    return res;
}
describe("Campaign Applications", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("returns PAYOUT_ACCOUNT_MISSING when a creator withdraws without payout_account", async () => {
        mockPrisma.creatorProfile.findUnique.mockResolvedValue({
            userId: "creator-1",
            payout_account: null,
        });
        const req = {
            user: { id: "creator-1", role: "CREATOR" },
            body: { amount: 5000 },
        };
        const res = createResponse();
        await (0, payment_controller_js_1.withdraw)(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: "PAYOUT_ACCOUNT_MISSING" });
        expect(mockPrisma.paymentTransaction.create).not.toHaveBeenCalled();
        expect(mockRequestMobileMoneyTransfer).not.toHaveBeenCalled();
    });
    it("creates campaign disbursements for accepted creators as pending provider transfers", async () => {
        mockPrisma.campaign.findUnique.mockResolvedValue({
            id: "campaign-1",
            businessId: "business-1",
            status: "IN_PROGRESS",
            budget: 10000,
            applications: [
                {
                    creatorId: "creator-1",
                    creator: {
                        creatorProfile: { payout_account: "momo:+250788000001" },
                    },
                },
                {
                    creatorId: "creator-2",
                    creator: {
                        creatorProfile: { payout_account: "momo:+250788000002" },
                    },
                },
            ],
        });
        mockPrisma.paymentTransaction.findMany.mockResolvedValue([]);
        mockPrisma.paymentTransaction.create
            .mockResolvedValueOnce({
            id: "tx-1",
            transactionRef: "campaign_disbursement_ref_1",
        })
            .mockResolvedValueOnce({
            id: "tx-2",
            transactionRef: "campaign_disbursement_ref_2",
        });
        mockPrisma.paymentTransaction.update
            .mockResolvedValueOnce({ id: "tx-1", paymentStatus: "PENDING" })
            .mockResolvedValueOnce({ id: "tx-2", paymentStatus: "PENDING" });
        mockRequestMobileMoneyTransfer
            .mockResolvedValueOnce({ providerRef: "mock-provider-1", status: "pending" })
            .mockResolvedValueOnce({ providerRef: "mock-provider-2", status: "pending" });
        const req = {
            user: { id: "business-1", role: "BUSINESS" },
            params: { id: "campaign-1" },
            headers: { "idempotency-key": "disburse-1" },
            body: {},
        };
        const res = createResponse();
        await (0, payment_controller_js_1.disburseCampaign)(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(mockPrisma.paymentTransaction.create).toHaveBeenCalledTimes(2);
        expect(mockPrisma.paymentTransaction.create).toHaveBeenCalledWith(expect.objectContaining({
            data: expect.objectContaining({
                userId: "creator-1",
                amount: 5000,
                paymentType: "CAMPAIGN_DISBURSEMENT",
                paymentStatus: "PENDING",
                idempotencyKey: "disburse-1",
                campaignId: "campaign-1",
            }),
        }));
        expect(mockRequestMobileMoneyTransfer).toHaveBeenCalledTimes(2);
    });
    it("marks a transaction completed on mock provider callback", async () => {
        mockPrisma.paymentTransaction.updateMany.mockResolvedValue({ count: 1 });
        const req = {
            body: {
                providerRef: "mock-provider-1",
                status: "completed",
            },
        };
        const res = createResponse();
        await (0, payment_controller_js_1.mockProviderCallback)(req, res);
        expect(mockPrisma.paymentTransaction.updateMany).toHaveBeenCalledWith({
            where: { OR: [{ providerRef: "mock-provider-1" }] },
            data: { paymentStatus: "COMPLETED" },
        });
        expect(res.json).toHaveBeenCalledWith({ updated: 1 });
    });
});
