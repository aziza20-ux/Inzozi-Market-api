"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPayments = exports.getPaymentById = exports.createPayment = void 0;
exports.withdraw = withdraw;
exports.disburseCampaign = disburseCampaign;
exports.mockProviderCallback = mockProviderCallback;
const crypto_1 = require("crypto");
const prisma_js_1 = __importDefault(require("../config/prisma.js"));
const mockMobileMoneyProvider_js_1 = require("../services/mockMobileMoneyProvider.js");
const schema_validators_1 = require("../validators/schema.validators");
const idempotency_service_1 = require("../services/idempotency.service");
function parsePositiveAmount(value) {
    const amount = Number(value);
    if (!Number.isFinite(amount) || amount <= 0)
        return null;
    return amount;
}
function makeTransactionRef(prefix) {
    return `${prefix}_${(0, crypto_1.randomUUID)()}`;
}
function isBusinessOrSystem(role) {
    return role === "BUSINESS" || role === "ADMIN" || role === "SYSTEM";
}
async function withdraw(req, res) {
    try {
        // Support legacy tests that set `req.user` instead of `req.userId`/`req.role`.
        const userId = req.userId ?? req.user?.id ?? req.user?.userId;
        const role = req.role ?? req.user?.role;
        if (!userId || !role)
            return res.status(401).json({ error: "UNAUTHORIZED" });
        if (role !== "CREATOR") {
            return res.status(403).json({ error: "CREATOR_ONLY" });
        }
        const amount = parsePositiveAmount(req.body?.amount);
        if (!amount)
            return res.status(400).json({ error: "INVALID_AMOUNT" });
        const profile = await prisma_js_1.default.creatorProfile.findUnique({
            where: { userId },
        });
        if (!profile?.payout_account) {
            return res.status(400).json({ error: "PAYOUT_ACCOUNT_MISSING" });
        }
        const transactionRef = makeTransactionRef("withdrawal");
        const transaction = await prisma_js_1.default.paymentTransaction.create({
            data: {
                userId,
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
        // Support legacy tests that set `req.user` instead of `req.userId`/`req.role`.
        const userId = req.userId ?? req.user?.id ?? req.user?.userId;
        const role = req.role ?? req.user?.role;
        if (!userId || !role)
            return res.status(401).json({ error: "UNAUTHORIZED" });
        if (!isBusinessOrSystem(role)) {
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
        if (role === "BUSINESS" && campaign.businessId !== userId) {
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
        if (existing.length > 0) {
            const allCompleted = existing.every((transaction) => transaction.paymentStatus === "COMPLETED");
            return res.status(allCompleted ? 200 : 202).json(existing);
        }
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
const createPayment = async (req, res) => {
    try {
        if (!req.userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const idempotencyKey = req.headers['idempotency-key'];
        if (!idempotencyKey) {
            res.status(400).json({ error: 'idempotency-key header is required' });
            return;
        }
        const { amount, paymentType: validatedPaymentType, transactionRef } = schema_validators_1.paymentTransactionCreateSchema.parse({
            amount: req.body.amount,
            paymentType: req.body.paymentType,
            transactionRef: idempotencyKey
        });
        const locked = await (0, idempotency_service_1.acquireIdempotencyLock)(idempotencyKey);
        if (!locked) {
            res.status(409).json({ error: 'PAYMENT_IN_PROGRESS' });
            return;
        }
        try {
            const existing = await prisma_js_1.default.paymentTransaction.findUnique({ where: { transactionRef } });
            if (existing) {
                if (existing.paymentStatus === 'SUCCESS') {
                    res.status(200).json(existing);
                    return;
                }
                else {
                    res.status(409).json({ error: 'PAYMENT_IN_PROGRESS' });
                    return;
                }
            }
            const transaction = await prisma_js_1.default.paymentTransaction.create({
                data: {
                    transactionRef,
                    amount,
                    paymentType: validatedPaymentType,
                    paymentStatus: 'PENDING',
                    userId: req.userId
                }
            });
            await prisma_js_1.default.paymentTransaction.update({
                where: { id: transaction.id },
                data: { paymentStatus: 'SUCCESS' }
            });
            res.status(201).json({ ...transaction, paymentStatus: 'SUCCESS' });
        }
        finally {
            await (0, idempotency_service_1.releaseIdempotencyLock)(idempotencyKey);
        }
    }
    catch (err) {
        res.status(400).json({ error: err.message || err.errors });
    }
};
exports.createPayment = createPayment;
const getPaymentById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!req.userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const payment = await prisma_js_1.default.paymentTransaction.findUnique({ where: { id: String(id) } });
        if (!payment) {
            res.status(404).json({ error: 'Payment not found' });
            return;
        }
        if (payment.userId !== req.userId && req.role !== 'ADMIN') {
            res.status(403).json({ error: 'Forbidden' });
            return;
        }
        res.status(200).json(payment);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.getPaymentById = getPaymentById;
const getPayments = async (req, res) => {
    try {
        const authReq = req;
        if (!authReq.userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const { type, status, cursor, limit = 10 } = req.query;
        const where = { userId: authReq.userId };
        if (type)
            where.paymentType = schema_validators_1.paymentTypeEnum.parse(String(type).toUpperCase());
        if (status)
            where.paymentStatus = schema_validators_1.paymentStatusEnum.parse(String(status).toUpperCase());
        const payments = await prisma_js_1.default.paymentTransaction.findMany({
            where,
            take: Number(limit),
            ...(cursor && { skip: 1, cursor: { id: String(cursor) } }),
            orderBy: { createdAt: 'desc' }
        });
        res.status(200).json(payments);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.getPayments = getPayments;
exports.default = {
    withdraw,
    disburseCampaign,
    mockProviderCallback,
};
