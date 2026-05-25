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

export const registerSchema = z
    .object({
        email: z.string().email().optional(),
        phone: z.string().optional(),
        password: z.string().min(8),
        role:roleEnum
    })
    .refine((data) => data.email || data.phone, { message: "Either email or phone is required" });

export const loginSchema = z.object({
    email: z.string().email().optional(),
    phone: z.string().optional(),
    password: z.string(),
});

export const verifySchema = z.object({
    otp: z.string().length(6),
});

export const refreshSchema = z.object({
    refreshToken: z.string(),
});

export const campaignCreateSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().optional(),
    budget: z.number().nonnegative("Budget must be >= 0"),
    startDate: dateStringToDate,
    endDate: dateStringToDate,
});

export const campaignUpdateSchema = campaignCreateSchema.partial();

export const campaignStatusUpdateSchema = z.object({
    status: campaignStatusEnum,
});

export const creatorProfileCreateSchema = z.object({
    bio: z.string().optional(),
    specialization: z.string().optional(),
    socialLinks: z.string().optional(),
    avatar: z.url().optional(),
    location:z.string().optional(),
    payout_account: z.string().optional(),
    payout_network: z.string().optional(),
    earnings: z.number().optional(),
    followers: z.number().int().optional(),
});

export const creatorProfileUpdateSchema = creatorProfileCreateSchema.partial();

export const creatorProfileStatusSchema = z.object({
    profile_status: z.enum(["active", "suspended"]),
});

export const creatorProfileSchema = z.object({
    userId: uuidString(),
    bio: z.string().optional(),
    specialization: z.string().optional(),
    socialLinks: z.string().optional(),
    earnings: z.number().optional(),
    followers: z.number().int().optional(),
    avatar: z.string().optional(),
    location: z.string().optional(),
    payout_account: z.string().optional(),
    payout_network: z.string().optional(),
    
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

export const paymentTransactionCreateSchema = paymentTransactionSchema.pick({
    amount: true,
    paymentType: true,
    transactionRef: true,
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
    registerSchema,
    loginSchema,
    verifySchema,
    refreshSchema,
    campaignCreateSchema,
    campaignUpdateSchema,
    campaignStatusUpdateSchema,
    creatorProfileCreateSchema,
    creatorProfileUpdateSchema,
    creatorProfileStatusSchema,
    paymentTransactionCreateSchema,
    userCreateSchema,
    creatorProfileSchema,
    contentSchema,
    campaignSchema,
    paymentTransactionSchema,
    messageSchema,
};


