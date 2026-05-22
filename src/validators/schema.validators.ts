import { z } from "zod";

export const roleEnum = z.enum(["CREATOR", "BUSINESS", "CONSUMER", "ADMIN"]);
export const verificationStatusEnum = z.enum(["PENDING", "VERIFIED", "REJECTED"]);
export const moderationStatusEnum = z.enum(["PENDING", "APPROVED", "REMOVED"]);
export const campaignStatusEnum = z.enum(["DRAFT", "ACTIVE", "COMPLETED", "CANCELLED"]);
export const paymentTypeEnum = z.enum(["SUBSCRIPTION", "PRODUCT_PURCHASE", "CAMPAIGN_PAYMENT"]);
export const paymentStatusEnum = z.enum(["PENDING", "SUCCESS", "FAILED", "REFUNDED"]);

const uuidString = () => z.uuid();
const dateStringToDate = z.preprocess((arg) => {
    if (typeof arg === "string" || arg instanceof Date) return new Date(arg as any);
    return arg;
}, z.date());

export const userCreateSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email({ message: "Invalid email address" }),
    password: z.string().min(8, "Password must be at least 8 characters"),
    profileImage: z.url().optional(),
    role: roleEnum,
    verificationStatus: verificationStatusEnum.optional(),
});

export const creatorProfileSchema = z.object({
    userId: uuidString(),
    bio: z.string().optional(),
    specialization: z.string().optional(),
    socialLinks: z.string().optional(),
    earnings: z.number().optional(),
    followers: z.number().int().optional(),
});

export const contentSchema = z.object({
    creatorId: uuidString(),
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z.string().optional(),
    contentType: z.string().min(1, "Content type is required"),
    mediaUrl: z.url({ message: "Invalid media URL" }),
    moderationStatus: moderationStatusEnum.optional(),
    visibility: z.boolean().optional(),
    creatorProfileId: z.uuid().optional(),
});

export const campaignSchema = z.object({
    businessId: uuidString(),
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z.string().optional(),
    budget: z.number().nonnegative("Budget must be >= 0"),
    status: campaignStatusEnum.optional(),
    startDate: dateStringToDate,
    endDate: dateStringToDate,
});

export const paymentTransactionSchema = z.object({
    userId: uuidString(),
    amount: z.number().nonnegative("Amount must be >= 0"),
    paymentType: paymentTypeEnum,
    paymentStatus: paymentStatusEnum.optional(),
    transactionRef: z.string().min(1, "transactionRef is required"),
});

export const messageSchema = z.object({
    senderId: uuidString(),
    receiverId: uuidString(),
    message: z.string().min(1, "Message cannot be empty"),
    isRead: z.boolean().optional(),
});

export type UserCreate = z.infer<typeof userCreateSchema>;
export type CreatorProfile = z.infer<typeof creatorProfileSchema>;
export type Content = z.infer<typeof contentSchema>;
export type Campaign = z.infer<typeof campaignSchema>;
export type PaymentTransaction = z.infer<typeof paymentTransactionSchema>;
export type Message = z.infer<typeof messageSchema>;

export const validators = {
    userCreateSchema,
    creatorProfileSchema,
    contentSchema,
    campaignSchema,
    paymentTransactionSchema,
    messageSchema,
};


