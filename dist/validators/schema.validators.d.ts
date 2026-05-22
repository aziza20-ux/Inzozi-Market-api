import { z } from "zod";
export declare const roleEnum: z.ZodEnum<{
    CREATOR: "CREATOR";
    BUSINESS: "BUSINESS";
    CONSUMER: "CONSUMER";
    ADMIN: "ADMIN";
}>;
export declare const verificationStatusEnum: z.ZodEnum<{
    PENDING: "PENDING";
    VERIFIED: "VERIFIED";
    REJECTED: "REJECTED";
}>;
export declare const moderationStatusEnum: z.ZodEnum<{
    PENDING: "PENDING";
    APPROVED: "APPROVED";
    REMOVED: "REMOVED";
}>;
export declare const campaignStatusEnum: z.ZodEnum<{
    DRAFT: "DRAFT";
    ACTIVE: "ACTIVE";
    COMPLETED: "COMPLETED";
    CANCELLED: "CANCELLED";
}>;
export declare const paymentTypeEnum: z.ZodEnum<{
    SUBSCRIPTION: "SUBSCRIPTION";
    PRODUCT_PURCHASE: "PRODUCT_PURCHASE";
    CAMPAIGN_PAYMENT: "CAMPAIGN_PAYMENT";
}>;
export declare const paymentStatusEnum: z.ZodEnum<{
    PENDING: "PENDING";
    SUCCESS: "SUCCESS";
    FAILED: "FAILED";
    REFUNDED: "REFUNDED";
}>;
export declare const userCreateSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    profileImage: z.ZodOptional<z.ZodURL>;
    role: z.ZodEnum<{
        CREATOR: "CREATOR";
        BUSINESS: "BUSINESS";
        CONSUMER: "CONSUMER";
        ADMIN: "ADMIN";
    }>;
    verificationStatus: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        VERIFIED: "VERIFIED";
        REJECTED: "REJECTED";
    }>>;
}, z.core.$strip>;
export declare const creatorProfileSchema: z.ZodObject<{
    userId: z.ZodUUID;
    bio: z.ZodOptional<z.ZodString>;
    specialization: z.ZodOptional<z.ZodString>;
    socialLinks: z.ZodOptional<z.ZodString>;
    earnings: z.ZodOptional<z.ZodNumber>;
    followers: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const contentSchema: z.ZodObject<{
    creatorId: z.ZodUUID;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    contentType: z.ZodString;
    mediaUrl: z.ZodURL;
    moderationStatus: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        APPROVED: "APPROVED";
        REMOVED: "REMOVED";
    }>>;
    visibility: z.ZodOptional<z.ZodBoolean>;
    creatorProfileId: z.ZodOptional<z.ZodUUID>;
}, z.core.$strip>;
export declare const campaignSchema: z.ZodObject<{
    businessId: z.ZodUUID;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    budget: z.ZodNumber;
    status: z.ZodOptional<z.ZodEnum<{
        DRAFT: "DRAFT";
        ACTIVE: "ACTIVE";
        COMPLETED: "COMPLETED";
        CANCELLED: "CANCELLED";
    }>>;
    startDate: z.ZodPreprocess<z.ZodDate>;
    endDate: z.ZodPreprocess<z.ZodDate>;
}, z.core.$strip>;
export declare const paymentTransactionSchema: z.ZodObject<{
    userId: z.ZodUUID;
    amount: z.ZodNumber;
    paymentType: z.ZodEnum<{
        SUBSCRIPTION: "SUBSCRIPTION";
        PRODUCT_PURCHASE: "PRODUCT_PURCHASE";
        CAMPAIGN_PAYMENT: "CAMPAIGN_PAYMENT";
    }>;
    paymentStatus: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        SUCCESS: "SUCCESS";
        FAILED: "FAILED";
        REFUNDED: "REFUNDED";
    }>>;
    transactionRef: z.ZodString;
}, z.core.$strip>;
export declare const messageSchema: z.ZodObject<{
    senderId: z.ZodUUID;
    receiverId: z.ZodUUID;
    message: z.ZodString;
    isRead: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type UserCreate = z.infer<typeof userCreateSchema>;
export type CreatorProfile = z.infer<typeof creatorProfileSchema>;
export type Content = z.infer<typeof contentSchema>;
export type Campaign = z.infer<typeof campaignSchema>;
export type PaymentTransaction = z.infer<typeof paymentTransactionSchema>;
export type Message = z.infer<typeof messageSchema>;
export declare const validators: {
    userCreateSchema: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodEmail;
        password: z.ZodString;
        profileImage: z.ZodOptional<z.ZodURL>;
        role: z.ZodEnum<{
            CREATOR: "CREATOR";
            BUSINESS: "BUSINESS";
            CONSUMER: "CONSUMER";
            ADMIN: "ADMIN";
        }>;
        verificationStatus: z.ZodOptional<z.ZodEnum<{
            PENDING: "PENDING";
            VERIFIED: "VERIFIED";
            REJECTED: "REJECTED";
        }>>;
    }, z.core.$strip>;
    creatorProfileSchema: z.ZodObject<{
        userId: z.ZodUUID;
        bio: z.ZodOptional<z.ZodString>;
        specialization: z.ZodOptional<z.ZodString>;
        socialLinks: z.ZodOptional<z.ZodString>;
        earnings: z.ZodOptional<z.ZodNumber>;
        followers: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    contentSchema: z.ZodObject<{
        creatorId: z.ZodUUID;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        contentType: z.ZodString;
        mediaUrl: z.ZodURL;
        moderationStatus: z.ZodOptional<z.ZodEnum<{
            PENDING: "PENDING";
            APPROVED: "APPROVED";
            REMOVED: "REMOVED";
        }>>;
        visibility: z.ZodOptional<z.ZodBoolean>;
        creatorProfileId: z.ZodOptional<z.ZodUUID>;
    }, z.core.$strip>;
    campaignSchema: z.ZodObject<{
        businessId: z.ZodUUID;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        budget: z.ZodNumber;
        status: z.ZodOptional<z.ZodEnum<{
            DRAFT: "DRAFT";
            ACTIVE: "ACTIVE";
            COMPLETED: "COMPLETED";
            CANCELLED: "CANCELLED";
        }>>;
        startDate: z.ZodPreprocess<z.ZodDate>;
        endDate: z.ZodPreprocess<z.ZodDate>;
    }, z.core.$strip>;
    paymentTransactionSchema: z.ZodObject<{
        userId: z.ZodUUID;
        amount: z.ZodNumber;
        paymentType: z.ZodEnum<{
            SUBSCRIPTION: "SUBSCRIPTION";
            PRODUCT_PURCHASE: "PRODUCT_PURCHASE";
            CAMPAIGN_PAYMENT: "CAMPAIGN_PAYMENT";
        }>;
        paymentStatus: z.ZodOptional<z.ZodEnum<{
            PENDING: "PENDING";
            SUCCESS: "SUCCESS";
            FAILED: "FAILED";
            REFUNDED: "REFUNDED";
        }>>;
        transactionRef: z.ZodString;
    }, z.core.$strip>;
    messageSchema: z.ZodObject<{
        senderId: z.ZodUUID;
        receiverId: z.ZodUUID;
        message: z.ZodString;
        isRead: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
};
//# sourceMappingURL=schema.validators.d.ts.map