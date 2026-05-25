-- AlterTable
ALTER TABLE "Message"
ADD COLUMN IF NOT EXISTS "conversationId" TEXT,
ADD COLUMN IF NOT EXISTS "readAt" TIMESTAMP(3),
ADD COLUMN IF NOT EXISTS "deletedAt" TIMESTAMP(3);

-- Backfill deterministic conversation IDs for existing messages.
UPDATE "Message"
SET "conversationId" = md5(
  CASE
    WHEN "senderId" < "receiverId"
      THEN "senderId" || ':' || "receiverId"
    ELSE "receiverId" || ':' || "senderId"
  END
)
WHERE "conversationId" IS NULL;

-- Keep future writes strict after backfill.
ALTER TABLE "Message"
ALTER COLUMN "conversationId" SET NOT NULL;

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Message_conversationId_createdAt_idx"
ON "Message"("conversationId", "createdAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Message_senderId_idx"
ON "Message"("senderId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Message_receiverId_idx"
ON "Message"("receiverId");
