/*
  Warnings:

  - You are about to drop the column `moderationStatus` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `rejectionReason` on the `Content` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Content" DROP COLUMN IF EXISTS "moderationStatus",
DROP COLUMN IF EXISTS "rejectionReason";

-- DropEnum
DROP TYPE IF EXISTS "ModerationStatus";
