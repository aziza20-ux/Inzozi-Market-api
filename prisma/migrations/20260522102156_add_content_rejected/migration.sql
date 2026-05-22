/*
  Warnings:

  - You are about to drop the column `contentType` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `mediaUrl` on the `Content` table. All the data in the column will be lost.
  - Added the required column `contentUrl` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `visibility` on the `Content` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('video', 'image', 'article', 'audio');

-- CreateEnum
CREATE TYPE "ContentVisibility" AS ENUM ('public', 'paid');

-- AlterEnum
ALTER TYPE "ModerationStatus" ADD VALUE 'REJECTED';

-- AlterTable
ALTER TABLE "Content" DROP COLUMN "contentType",
DROP COLUMN "mediaUrl",
ADD COLUMN     "contentUrl" TEXT NOT NULL,
ADD COLUMN     "currency" TEXT,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "rejectionReason" TEXT,
ADD COLUMN     "thumbnailUrl" TEXT,
ADD COLUMN     "type" "ContentType" NOT NULL,
DROP COLUMN "visibility",
ADD COLUMN     "visibility" "ContentVisibility" NOT NULL;

-- CreateTable
CREATE TABLE "PremiumPurchase" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PremiumPurchase_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PremiumPurchase" ADD CONSTRAINT "PremiumPurchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PremiumPurchase" ADD CONSTRAINT "PremiumPurchase_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
