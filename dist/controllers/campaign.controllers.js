"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCampaign = createCampaign;
exports.updateCampaignStatus = updateCampaignStatus;
exports.applyToCampaign = applyToCampaign;
exports.listCampaignApplications = listCampaignApplications;
exports.patchCampaignApplication = patchCampaignApplication;
const prisma_js_1 = __importDefault(require("../config/prisma.js"));
function parseUuidParam(value) {
    if (!value)
        return null;
    const s = String(value);
    if (!s)
        return null;
    return s;
}
function getCampaignOpenStatuses(status) {
    // Spec says "campaign must be open"; repository already uses IN_PROGRESS.
    // Treat DRAFT/COMPLETED/CANCELLED as closed.
    return status === "ACTIVE" || status === "IN_PROGRESS";
}
function isTerminalCampaignStatus(status) {
    return status === "CANCELLED" || status === "COMPLETED";
}
async function createCampaign(req, res) {
    try {
        const user = req.user;
        if (!user)
            return res.status(401).json({ error: "UNAUTHORIZED" });
        if (user.role !== "BUSINESS") {
            return res.status(403).json({ error: "BUSINESS_ONLY" });
        }
        const { title, description, budget, status, niche_filter, min_audience_size, max_creators, startDate, endDate, } = req.body ?? {};
        const parsedBudget = Number(budget);
        const parsedMaxCreators = Number(max_creators);
        if (!Number.isFinite(parsedBudget) || parsedBudget <= 0) {
            return res.status(400).json({ error: "INVALID_BUDGET" });
        }
        if (!Number.isInteger(parsedMaxCreators) || parsedMaxCreators <= 0) {
            return res.status(400).json({ error: "INVALID_MAX_CREATORS" });
        }
        if (parsedBudget < parsedMaxCreators) {
            return res.status(400).json({ error: "CAMPAIGN_BUDGET_TOO_LOW" });
        }
        const campaign = await prisma_js_1.default.campaign.create({
            data: {
                businessId: user.id,
                title: String(title),
                description: description ?? null,
                budget: parsedBudget,
                status: status ?? "DRAFT",
                niche_filter: String(niche_filter),
                min_audience_size: Number(min_audience_size ?? 0),
                max_creators: parsedMaxCreators,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
            },
        });
        return res.status(201).json(campaign);
    }
    catch (e) {
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function updateCampaignStatus(req, res) {
    try {
        const user = req.user;
        if (!user)
            return res.status(401).json({ error: "UNAUTHORIZED" });
        if (!(user.role === "BUSINESS" || user.role === "ADMIN")) {
            return res.status(403).json({ error: "INSUFFICIENT_ROLE" });
        }
        const campaignId = parseUuidParam(req.params.id);
        const nextStatus = String(req.body?.status ?? "").toUpperCase();
        if (!campaignId || !nextStatus) {
            return res.status(400).json({ error: "INVALID_PARAMS" });
        }
        const allowed = ["DRAFT", "ACTIVE", "IN_PROGRESS", "COMPLETED", "CANCELLED"];
        if (!allowed.includes(nextStatus)) {
            return res.status(400).json({ error: "INVALID_CAMPAIGN_STATUS" });
        }
        const campaign = await prisma_js_1.default.campaign.findFirst({ where: { id: campaignId } });
        if (!campaign)
            return res.status(404).json({ error: "CAMPAIGN_NOT_FOUND" });
        if (user.role === "BUSINESS" && campaign.businessId !== user.id) {
            return res.status(403).json({ error: "ACCESS_DENIED" });
        }
        if (isTerminalCampaignStatus(campaign.status)) {
            return res.status(400).json({ error: "CAMPAIGN_STATUS_TERMINAL" });
        }
        if (campaign.status === "DRAFT" && nextStatus === "COMPLETED") {
            return res.status(400).json({ error: "INVALID_CAMPAIGN_STATUS_TRANSITION" });
        }
        const updated = await prisma_js_1.default.campaign.update({
            where: { id: campaignId },
            data: { status: nextStatus },
        });
        return res.json(updated);
    }
    catch (e) {
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function applyToCampaign(req, res) {
    try {
        const user = req.user;
        if (!user)
            return res.status(401).json({ error: "UNAUTHORIZED" });
        // Auth middleware currently types roles as ADMIN|SELLER|BUYER.
        // Campaign spec requires "creator only"; accept both "CREATOR" and fallback checks.
        if (!(user.role === "CREATOR")) {
            return res.status(403).json({ error: "CREATOR_ONLY" });
        }
        const { id } = req.params;
        const campaignId = parseUuidParam(id);
        if (!campaignId)
            return res.status(400).json({ error: "INVALID_CAMPAIGN_ID" });
        const campaign = await prisma_js_1.default.campaign.findFirst({
            where: { id: campaignId },
            include: { business: false },
        });
        if (!campaign)
            return res.status(404).json({ error: "CAMPAIGN_NOT_FOUND" });
        if (!getCampaignOpenStatuses(campaign.status)) {
            return res.status(403).json({ error: "CAMPAIGN_NOT_OPEN" });
        }
        const profile = await prisma_js_1.default.creatorProfile.findFirst({
            where: { userId: user.id },
        });
        // Eligibility gates tested
        if (!profile || !profile.specialization) {
            return res.status(403).json({ error: "Niche_not_eligible" });
        }
        if (profile.specialization !== campaign.niche_filter) {
            return res.status(403).json({ error: "Niche_not_eligible" });
        }
        const followers = profile.followers ?? 0;
        if (followers < campaign.min_audience_size) {
            return res.status(403).json({ error: "MIN_AUDIENCE_SIZE_NOT_MET" });
        }
        // Duplicate application => 409
        try {
            const created = await prisma_js_1.default.application.create({
                data: {
                    campaignId,
                    creatorId: user.id,
                    status: "PENDING",
                },
            });
            return res.status(201).json(created);
        }
        catch (e) {
            // Prisma unique violation code
            if (e?.code === "P2002") {
                return res.status(409).json({ error: "DUPLICATE_APPLICATION" });
            }
            throw e;
        }
    }
    catch (e) {
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function listCampaignApplications(req, res) {
    try {
        const user = req.user;
        if (!user)
            return res.status(401).json({ error: "UNAUTHORIZED" });
        // Ignore TS role typing mismatch; runtime checks based on spec roles.
        if (!(user.role === "BUSINESS" || user.role === "ADMIN")) {
            return res.status(403).json({ error: "INSUFFICIENT_ROLE" });
        }
        const { id } = req.params;
        const campaignId = parseUuidParam(id);
        if (!campaignId)
            return res.status(400).json({ error: "INVALID_CAMPAIGN_ID" });
        const campaign = await prisma_js_1.default.campaign.findFirst({
            where: { id: campaignId },
        });
        if (!campaign)
            return res.status(404).json({ error: "CAMPAIGN_NOT_FOUND" });
        // If Business, must own the campaign
        if (user.role === "BUSINESS" && campaign.businessId !== user.id) {
            return res.status(403).json({ error: "ACCESS_DENIED" });
        }
        const applications = await prisma_js_1.default.application.findMany({
            where: { campaignId },
            orderBy: { createdAt: "desc" },
            include: {
                creator: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        role: true,
                        verificationStatus: true,
                        profileImage: true,
                    },
                },
            },
        });
        return res.json(applications);
    }
    catch (e) {
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
async function patchCampaignApplication(req, res) {
    try {
        const user = req.user;
        if (!user)
            return res.status(401).json({ error: "UNAUTHORIZED" });
        if (!(user.role === "BUSINESS")) {
            return res.status(403).json({ error: "BUSINESS_ONLY" });
        }
        const { id, appId } = req.params;
        const campaignId = parseUuidParam(id);
        const applicationId = parseUuidParam(appId);
        if (!campaignId || !applicationId) {
            return res.status(400).json({ error: "INVALID_PARAMS" });
        }
        const { action } = req.body ?? {};
        if (action !== "accept" && action !== "reject") {
            return res.status(400).json({ error: "INVALID_ACTION" });
        }
        const campaign = await prisma_js_1.default.campaign.findFirst({
            where: { id: campaignId },
        });
        if (!campaign)
            return res.status(404).json({ error: "CAMPAIGN_NOT_FOUND" });
        if (campaign.businessId !== user.id) {
            return res.status(403).json({ error: "ACCESS_DENIED" });
        }
        const application = await prisma_js_1.default.application.findFirst({
            where: { id: applicationId, campaignId },
        });
        if (!application)
            return res.status(404).json({ error: "APPLICATION_NOT_FOUND" });
        if (application.status !== "PENDING") {
            return res.status(400).json({ error: "INVALID_APPLICATION_STATE" });
        }
        if (action === "reject") {
            const updated = await prisma_js_1.default.application.update({
                where: { id: applicationId },
                data: { status: "REJECTED" },
            });
            return res.json(updated);
        }
        // action === accept
        const acceptedCount = await prisma_js_1.default.application.count({
            where: { campaignId, status: "ACCEPTED" },
        });
        if (acceptedCount >= campaign.max_creators) {
            return res.status(409).json({ error: "MAX_CREATORS_REACHED" });
        }
        const acceptedApplication = await prisma_js_1.default.application.update({
            where: { id: applicationId },
            data: { status: "ACCEPTED" },
        });
        // First creator accepted => campaign status update to in_progress
        if (acceptedCount === 0) {
            await prisma_js_1.default.campaign.update({
                where: { id: campaignId },
                data: { status: "IN_PROGRESS" },
            });
        }
        return res.json(acceptedApplication);
    }
    catch (e) {
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
exports.default = {
    createCampaign,
    updateCampaignStatus,
    applyToCampaign,
    listCampaignApplications,
    patchCampaignApplication,
};
