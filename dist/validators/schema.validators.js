"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validators = exports.messageSchema = exports.paymentTransactionSchema = exports.campaignSchema = exports.contentSchema = exports.creatorProfileSchema = exports.userCreateSchema = exports.paymentStatusEnum = exports.paymentTypeEnum = exports.campaignStatusEnum = exports.moderationStatusEnum = exports.verificationStatusEnum = exports.roleEnum = void 0;
const zod_1 = require("zod");
exports.roleEnum = zod_1.z.enum(["CREATOR", "BUSINESS", "CONSUMER", "ADMIN"]);
exports.verificationStatusEnum = zod_1.z.enum(["PENDING", "VERIFIED", "REJECTED"]);
exports.moderationStatusEnum = zod_1.z.enum(["PENDING", "APPROVED", "REMOVED"]);
exports.campaignStatusEnum = zod_1.z.enum(["DRAFT", "ACTIVE", "COMPLETED", "CANCELLED"]);
exports.paymentTypeEnum = zod_1.z.enum(["SUBSCRIPTION", "PRODUCT_PURCHASE", "CAMPAIGN_PAYMENT"]);
exports.paymentStatusEnum = zod_1.z.enum(["PENDING", "SUCCESS", "FAILED", "REFUNDED"]);
const uuidString = () => zod_1.z.uuid();
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
exports.creatorProfileSchema = zod_1.z.object({
    userId: uuidString(),
    bio: zod_1.z.string().optional(),
    specialization: zod_1.z.string().optional(),
    socialLinks: zod_1.z.string().optional(),
    earnings: zod_1.z.number().optional(),
    followers: zod_1.z.number().int().optional(),
});
exports.contentSchema = zod_1.z.object({
    creatorId: uuidString(),
    title: zod_1.z.string().min(3, "Title must be at least 3 characters"),
    description: zod_1.z.string().optional(),
    contentType: zod_1.z.string().min(1, "Content type is required"),
    mediaUrl: zod_1.z.url({ message: "Invalid media URL" }),
    moderationStatus: exports.moderationStatusEnum.optional(),
    visibility: zod_1.z.boolean().optional(),
    creatorProfileId: zod_1.z.uuid().optional(),
});
exports.campaignSchema = zod_1.z.object({
    businessId: uuidString(),
    title: zod_1.z.string().min(3, "Title must be at least 3 characters"),
    description: zod_1.z.string().optional(),
    budget: zod_1.z.number().nonnegative("Budget must be >= 0"),
    status: exports.campaignStatusEnum.optional(),
    startDate: dateStringToDate,
    endDate: dateStringToDate,
});
exports.paymentTransactionSchema = zod_1.z.object({
    userId: uuidString(),
    amount: zod_1.z.number().nonnegative("Amount must be >= 0"),
    paymentType: exports.paymentTypeEnum,
    paymentStatus: exports.paymentStatusEnum.optional(),
    transactionRef: zod_1.z.string().min(1, "transactionRef is required"),
});
exports.messageSchema = zod_1.z.object({
    senderId: uuidString(),
    receiverId: uuidString(),
    message: zod_1.z.string().min(1, "Message cannot be empty"),
    isRead: zod_1.z.boolean().optional(),
});
exports.validators = {
    userCreateSchema: exports.userCreateSchema,
    creatorProfileSchema: exports.creatorProfileSchema,
    contentSchema: exports.contentSchema,
    campaignSchema: exports.campaignSchema,
    paymentTransactionSchema: exports.paymentTransactionSchema,
    messageSchema: exports.messageSchema,
};
//# sourceMappingURL=schema.validators.js.map