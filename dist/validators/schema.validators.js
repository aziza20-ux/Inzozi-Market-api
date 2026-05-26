"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validators = exports.messageSchema = exports.paymentTransactionCreateSchema = exports.paymentTransactionSchema = exports.campaignSchema = exports.contentSchema = exports.creatorProfileSchema = exports.creatorProfileStatusSchema = exports.creatorProfileUpdateSchema = exports.creatorProfileCreateSchema = exports.campaignStatusUpdateSchema = exports.campaignUpdateSchema = exports.campaignCreateSchema = exports.refreshSchema = exports.verifySchema = exports.loginSchema = exports.registerSchema = exports.userCreateSchema = exports.paymentStatusEnum = exports.paymentTypeEnum = exports.campaignStatusEnum = exports.moderationStatusEnum = exports.verificationStatusEnum = exports.roleEnum = void 0;
const zod_1 = require("zod");
exports.roleEnum = zod_1.z.enum(["CREATOR", "BUSINESS", "CONSUMER", "ADMIN"]);
exports.verificationStatusEnum = zod_1.z.enum([
    "PENDING",
    "VERIFIED",
    "REJECTED",
]);
exports.moderationStatusEnum = zod_1.z.enum(["PENDING", "APPROVED", "REMOVED"]);
exports.campaignStatusEnum = zod_1.z.enum([
    "DRAFT",
    "ACTIVE",
    "IN_PROGRESS",
    "COMPLETED",
    "CANCELLED",
]);
exports.paymentTypeEnum = zod_1.z.enum([
    "SUBSCRIPTION",
    "PRODUCT_PURCHASE",
    "CAMPAIGN_PAYMENT",
    "WITHDRAWAL",
    "CAMPAIGN_DISBURSEMENT",
]);
exports.paymentStatusEnum = zod_1.z.enum([
    "PENDING",
    "SUCCESS",
    "FAILED",
    "REFUNDED",
    "COMPLETED",
]);
const uuidString = () => zod_1.z.uuid();
const httpsUrl = (message) => zod_1.z.url({ message }).refine((value) => new URL(value).protocol === "https:", {
    message: "URL must use HTTPS",
});
const dateStringToDate = zod_1.z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date)
        return new Date(arg);
    return arg;
}, zod_1.z.date());
exports.userCreateSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    email: zod_1.z.email({ message: "Invalid email address" }),
    password: zod_1.z.string().min(8, "Password must be at least 8 characters"),
    profileImage: zod_1.z.url().optional(),
    role: exports.roleEnum,
    verificationStatus: exports.verificationStatusEnum.optional(),
});
exports.registerSchema = zod_1.z
    .object({
    email: zod_1.z.string().email().optional(),
    phone: zod_1.z.string().optional(),
    password: zod_1.z.string().min(8),
    role: exports.roleEnum
})
    .refine((data) => data.email || data.phone, { message: "Either email or phone is required" });
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email().optional(),
    phone: zod_1.z.string().optional(),
    password: zod_1.z.string(),
});
exports.verifySchema = zod_1.z.object({
    otp: zod_1.z.string().length(6),
});
exports.refreshSchema = zod_1.z.object({
    refreshToken: zod_1.z.string(),
});
exports.campaignCreateSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    description: zod_1.z.string().optional(),
    budget: zod_1.z.number().nonnegative("Budget must be >= 0"),
    niche_filter: zod_1.z.string().min(1, "niche_filter is required"),
    min_audience_size: zod_1.z.number().int().nonnegative(),
    max_creators: zod_1.z.number().int().positive(),
    startDate: dateStringToDate,
    endDate: dateStringToDate,
});
exports.campaignUpdateSchema = exports.campaignCreateSchema.partial();
exports.campaignStatusUpdateSchema = zod_1.z.object({
    status: exports.campaignStatusEnum,
});
exports.creatorProfileCreateSchema = zod_1.z.object({
    bio: zod_1.z.string().optional(),
    specialization: zod_1.z.string().optional(),
    socialLinks: zod_1.z.string().optional(),
    avatar: zod_1.z.url().optional(),
    location: zod_1.z.string().optional(),
    payout_account: zod_1.z.string().optional(),
    payout_network: zod_1.z.string().optional(),
    earnings: zod_1.z.number().optional(),
    followers: zod_1.z.number().int().optional(),
});
exports.creatorProfileUpdateSchema = exports.creatorProfileCreateSchema.partial();
exports.creatorProfileStatusSchema = zod_1.z.object({
    profile_status: zod_1.z.enum(["active", "suspended"]),
});
exports.creatorProfileSchema = zod_1.z.object({
    userId: uuidString(),
    bio: zod_1.z.string().optional(),
    specialization: zod_1.z.string().optional(),
    socialLinks: zod_1.z.string().optional(),
    earnings: zod_1.z.number().optional(),
    followers: zod_1.z.number().int().optional(),
    avatar: zod_1.z.string().optional(),
    location: zod_1.z.string().optional(),
    payout_account: zod_1.z.string().optional(),
    payout_network: zod_1.z.string().optional(),
});
exports.contentSchema = zod_1.z
    .object({
    creatorId: uuidString().optional(),
    title: zod_1.z.string().min(3, "Title must be at least 3 characters"),
    description: zod_1.z.string().optional(),
    contentType: zod_1.z.string().min(1, "Content type is required").optional(),
    type: zod_1.z.string().min(1, "Content type is required").optional(),
    media_url: httpsUrl("Invalid media URL").optional(),
    mediaUrl: httpsUrl("Invalid media URL").optional(),
    contentUrl: httpsUrl("Invalid media URL").optional(),
    moderationStatus: exports.moderationStatusEnum.optional(),
    visibility: zod_1.z.union([zod_1.z.boolean(), zod_1.z.enum(["public", "paid"])]).optional(),
    creatorProfileId: zod_1.z.uuid().optional(),
})
    .superRefine((value, ctx) => {
    if (!value.media_url && !value.mediaUrl && !value.contentUrl) {
        ctx.addIssue({
            code: "custom",
            path: ["media_url"],
            message: "media_url is required",
        });
    }
});
exports.campaignSchema = zod_1.z.object({
    businessId: uuidString(),
    title: zod_1.z.string().min(3, "Title must be at least 3 characters"),
    description: zod_1.z.string().optional(),
    budget: zod_1.z.number().nonnegative("Budget must be >= 0"),
    status: exports.campaignStatusEnum.optional(),
    niche_filter: zod_1.z.string(),
    min_audience_size: zod_1.z.number().int().nonnegative(),
    max_creators: zod_1.z.number().int().positive(),
    startDate: dateStringToDate,
    endDate: dateStringToDate,
});
exports.paymentTransactionSchema = zod_1.z.object({
    userId: uuidString(),
    amount: zod_1.z.number().nonnegative("Amount must be >= 0"),
    paymentType: exports.paymentTypeEnum,
    paymentStatus: exports.paymentStatusEnum.optional(),
    transactionRef: zod_1.z.string().min(1, "transactionRef is required"),
    providerRef: zod_1.z.string().optional(),
    idempotencyKey: zod_1.z.string().optional(),
    campaignId: uuidString().optional(),
});
exports.paymentTransactionCreateSchema = exports.paymentTransactionSchema.pick({
    amount: true,
    paymentType: true,
    transactionRef: true,
});
exports.messageSchema = zod_1.z.object({
    senderId: uuidString(),
    receiverId: uuidString(),
    conversationId: zod_1.z.string().min(1, "conversationId is required").optional(),
    message: zod_1.z.string().min(1, "Message cannot be empty"),
    isRead: zod_1.z.boolean().optional(),
    readAt: dateStringToDate.optional(),
    deletedAt: dateStringToDate.optional(),
});
exports.validators = {
    registerSchema: exports.registerSchema,
    loginSchema: exports.loginSchema,
    verifySchema: exports.verifySchema,
    refreshSchema: exports.refreshSchema,
    campaignCreateSchema: exports.campaignCreateSchema,
    campaignUpdateSchema: exports.campaignUpdateSchema,
    campaignStatusUpdateSchema: exports.campaignStatusUpdateSchema,
    creatorProfileCreateSchema: exports.creatorProfileCreateSchema,
    creatorProfileUpdateSchema: exports.creatorProfileUpdateSchema,
    creatorProfileStatusSchema: exports.creatorProfileStatusSchema,
    paymentTransactionCreateSchema: exports.paymentTransactionCreateSchema,
    userCreateSchema: exports.userCreateSchema,
    creatorProfileSchema: exports.creatorProfileSchema,
    contentSchema: exports.contentSchema,
    campaignSchema: exports.campaignSchema,
    paymentTransactionSchema: exports.paymentTransactionSchema,
    messageSchema: exports.messageSchema,
};
