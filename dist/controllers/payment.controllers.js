"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdraw = withdraw;
exports.disburseCampaign = disburseCampaign;
exports.mockProviderCallback = mockProviderCallback;
const crypto_1 = require("crypto");
const prisma_js_1 = __importDefault(require("../config/prisma.js"));
const mockMobileMoneyProvider_js_1 = require("../services/mockMobileMoneyProvider.js");
function parsePositiveAmount(value) {
    const amount = Number(value);
    if (!Number.isFinite(amount) || amount <= 0)
        return null;
    return amount;
}
function makeTransactionRef(prefix) {
    return `${prefix}_${(0, crypto_1.randomUUID)()}`;
}
function isBusinessOrSystem(user) {
    return user?.role === "BUSINESS" || user?.role === "ADMIN" || user?.role === "SYSTEM";
}
async function withdraw(req, res) {
    try {
        const user = req.user;
        if (!user)
            return res.status(401).json({ error: "UNAUTHORIZED" });
        if (user.role !== "CREATOR") {
            return res.status(403).json({ error: "CREATOR_ONLY" });
        }
        const amount = parsePositiveAmount(req.body?.amount);
        if (!amount)
            return res.status(400).json({ error: "INVALID_AMOUNT" });
        const profile = await prisma_js_1.default.creatorProfile.findUnique({
            where: { userId: user.id },
        });
        if (!profile?.payout_account) {
            return res.status(400).json({ error: "PAYOUT_ACCOUNT_MISSING" });
        }
        const transactionRef = makeTransactionRef("withdrawal");
        const transaction = await prisma_js_1.default.paymentTransaction.create({
            data: {
                userId: user.id,
                amount,
                paymentType: "WITHDRAWAL",
                paymentStatus: "PENDING",
                transactionRef,
            },
        });
        const provider = await (0, mockMobileMoneyProvider_js_1.requestMobileMoneyTransfer)({
            transactionRef,
            amount,
            payoutAccount: profile.payout_account,
            metadata: { paymentTransactionId: transaction.id },
        });
        const updated = await prisma_js_1.default.paymentTransaction.update({
            where: { id: transaction.id },
            data: { providerRef: provider.providerRef },
        });
        return res.status(201).json(updated);
    }
    catch (e) {
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function disburseCampaign(req, res) {
    try {
        const user = req.user;
        if (!user)
            return res.status(401).json({ error: "UNAUTHORIZED" });
        if (!isBusinessOrSystem(user)) {
            return res.status(403).json({ error: "INSUFFICIENT_ROLE" });
        }
        const campaignId = typeof req.params.id === "string" ? req.params.id : undefined;
        if (!campaignId) {
            return res.status(400).json({ error: "INVALID_CAMPAIGN_ID" });
        }
        const idempotencyKeyValue = req.headers["idempotency-key"] ?? req.body?.idempotency_key;
        if (typeof idempotencyKeyValue !== "string" ||
            idempotencyKeyValue.trim().length === 0) {
            return res.status(400).json({ error: "IDEMPOTENCY_KEY_REQUIRED" });
        }
        const idempotencyKey = idempotencyKeyValue.trim();
        const campaign = (await prisma_js_1.default.campaign.findUnique({
            where: { id: campaignId },
            include: {
                applications: {
                    where: { status: "ACCEPTED" },
                    include: {
                        creator: {
                            include: { creatorProfile: true },
                        },
                    },
                },
            },
        }));
        if (!campaign)
            return res.status(404).json({ error: "CAMPAIGN_NOT_FOUND" });
        if (user.role === "BUSINESS" && campaign.businessId !== user.id) {
            return res.status(403).json({ error: "ACCESS_DENIED" });
        }
        if (campaign.status !== "IN_PROGRESS" && campaign.status !== "COMPLETED") {
            return res.status(400).json({ error: "INVALID_CAMPAIGN_STATE" });
        }
        if (campaign.applications.length === 0) {
            return res.status(400).json({ error: "NO_ACCEPTED_CREATORS" });
        }
        const existing = await prisma_js_1.default.paymentTransaction.findMany({
            where: {
                campaignId,
                idempotencyKey,
                paymentType: "CAMPAIGN_DISBURSEMENT",
            },
            orderBy: { createdAt: "asc" },
        });
        if (existing.length > 0)
            return res.status(200).json(existing);
        const amount = campaign.budget / campaign.applications.length;
        const transactions = [];
        for (const application of campaign.applications) {
            const payoutAccount = application.creator.creatorProfile?.payout_account;
            if (!payoutAccount) {
                return res.status(400).json({
                    error: "PAYOUT_ACCOUNT_MISSING",
                    creatorId: application.creatorId,
                });
            }
            const transactionRef = makeTransactionRef("campaign_disbursement");
            const created = await prisma_js_1.default.paymentTransaction.create({
                data: {
                    userId: application.creatorId,
                    amount,
                    paymentType: "CAMPAIGN_DISBURSEMENT",
                    paymentStatus: "PENDING",
                    transactionRef,
                    idempotencyKey,
                    campaignId,
                },
            });
            const provider = await (0, mockMobileMoneyProvider_js_1.requestMobileMoneyTransfer)({
                transactionRef,
                amount,
                payoutAccount,
                metadata: {
                    campaignId,
                    paymentTransactionId: created.id,
                },
            });
            const updated = await prisma_js_1.default.paymentTransaction.update({
                where: { id: created.id },
                data: { providerRef: provider.providerRef },
            });
            transactions.push(updated);
        }
        return res.status(201).json(transactions);
    }
    catch (e) {
        if (e?.code === "P2002") {
            return res.status(409).json({ error: "DUPLICATE_IDEMPOTENCY_KEY" });
        }
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function mockProviderCallback(req, res) {
    try {
        const { transactionRef, providerRef, status } = req.body ?? {};
        if (!transactionRef && !providerRef) {
            return res.status(400).json({ error: "TRANSACTION_REFERENCE_REQUIRED" });
        }
        if (status !== "completed") {
            return res.status(400).json({ error: "UNSUPPORTED_CALLBACK_STATUS" });
        }
        const filters = [
            transactionRef ? { transactionRef: String(transactionRef) } : null,
            providerRef ? { providerRef: String(providerRef) } : null,
        ].filter((filter) => Boolean(filter));
        const updated = await prisma_js_1.default.paymentTransaction.updateMany({
            where: {
                OR: filters,
            },
            data: { paymentStatus: "COMPLETED" },
        });
        return res.json({ updated: updated.count });
    }
    catch (e) {
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
exports.default = {
    withdraw,
    disburseCampaign,
    mockProviderCallback,
};
//# sourceMappingURL=payment.controllers.js.map