/*
  Warnings:

  - Added the required column `max_creators` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `min_audience_size` to the `Campaign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `niche_filter` to the `Campaign` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "CampaignStatus" ADD VALUE 'IN_PROGRESS';

-- AlterTable
ALTER TABLE "Campaign" ADD COLUMN     "max_creators" INTEGER NOT NULL,
ADD COLUMN     "min_audience_size" INTEGER NOT NULL,
ADD COLUMN     "niche_filter" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "campaignId" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Application_campaignId_idx" ON "Application"("campaignId");

-- CreateIndex
CREATE UNIQUE INDEX "Application_campaignId_creatorId_key" ON "Application"("campaignId", "creatorId");

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
