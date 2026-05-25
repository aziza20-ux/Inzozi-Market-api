import { z } from "zod";

export const roleEnum = z.enum(["CREATOR", "BUSINESS", "CONSUMER", "ADMIN"]);
export const verificationStatusEnum = z.enum([
  "PENDING",
  "VERIFIED",
  "REJECTED",
]);
export const moderationStatusEnum = z.enum(["PENDING", "APPROVED", "REMOVED"]);
export const campaignStatusEnum = z.enum([
  "DRAFT",
  "ACTIVE",
  "IN_PROGRESS",
  "COMPLETED",
  "CANCELLED",
]);

export const paymentTypeEnum = z.enum([
  "SUBSCRIPTION",
  "PRODUCT_PURCHASE",
  "CAMPAIGN_PAYMENT",
  "WITHDRAWAL",
  "CAMPAIGN_DISBURSEMENT",
]);
export const paymentStatusEnum = z.enum([
  "PENDING",
  "SUCCESS",
  "FAILED",
  "REFUNDED",
  "COMPLETED",
]);

const uuidString = () => z.uuid();
const httpsUrl = (message: string) =>
  z.url({ message }).refine((value) => new URL(value).protocol === "https:", {
    message: "URL must use HTTPS",
  });
const dateStringToDate = z.preprocess((arg) => {
  if (typeof arg === "string" || arg instanceof Date)
    return new Date(arg as any);
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
  payout_account: z.string().optional(),
  earnings: z.number().optional(),
  followers: z.number().int().optional(),
});

export const contentSchema = z
  .object({
    creatorId: uuidString().optional(),
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z.string().optional(),
    contentType: z.string().min(1, "Content type is required").optional(),
    type: z.string().min(1, "Content type is required").optional(),
    media_url: httpsUrl("Invalid media URL").optional(),
    mediaUrl: httpsUrl("Invalid media URL").optional(),
    contentUrl: httpsUrl("Invalid media URL").optional(),
    moderationStatus: moderationStatusEnum.optional(),
    visibility: z.union([z.boolean(), z.enum(["public", "paid"])]).optional(),
    creatorProfileId: z.uuid().optional(),
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

export const campaignSchema = z.object({
  businessId: uuidString(),
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  budget: z.number().nonnegative("Budget must be >= 0"),
  status: campaignStatusEnum.optional(),
  niche_filter: z.string(),
  min_audience_size: z.number().int().nonnegative(),
  max_creators: z.number().int().positive(),
  startDate: dateStringToDate,
  endDate: dateStringToDate,
});

export const paymentTransactionSchema = z.object({
  userId: uuidString(),
  amount: z.number().nonnegative("Amount must be >= 0"),
  paymentType: paymentTypeEnum,
  paymentStatus: paymentStatusEnum.optional(),
  transactionRef: z.string().min(1, "transactionRef is required"),
  providerRef: z.string().optional(),
  idempotencyKey: z.string().optional(),
  campaignId: uuidString().optional(),
});

export const messageSchema = z.object({
  senderId: uuidString(),
  receiverId: uuidString(),
  conversationId: z.string().min(1, "conversationId is required").optional(),
  message: z.string().min(1, "Message cannot be empty"),
  isRead: z.boolean().optional(),
  readAt: dateStringToDate.optional(),
  deletedAt: dateStringToDate.optional(),
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
