-- AlterEnum
ALTER TYPE "PaymentType" ADD VALUE IF NOT EXISTS 'WITHDRAWAL';
ALTER TYPE "PaymentType" ADD VALUE IF NOT EXISTS 'CAMPAIGN_DISBURSEMENT';

-- AlterEnum
ALTER TYPE "PaymentStatus" ADD VALUE IF NOT EXISTS 'COMPLETED';

-- AlterTable
ALTER TABLE "CreatorProfile" ADD COLUMN IF NOT EXISTS "payout_account" TEXT;

-- AlterTable
ALTER TABLE "PaymentTransaction"
ADD COLUMN IF NOT EXISTS "providerRef" TEXT,
ADD COLUMN IF NOT EXISTS "idempotencyKey" TEXT,
ADD COLUMN IF NOT EXISTS "campaignId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "PaymentTransaction_idempotencyKey_userId_paymentType_key"
ON "PaymentTransaction"("idempotencyKey", "userId", "paymentType");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "PaymentTransaction_campaignId_idx"
ON "PaymentTransaction"("campaignId");
