/*
  Warnings:

  - You are about to alter the column `budget` on the `Campaign` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Campaign" ALTER COLUMN "budget" SET DATA TYPE INTEGER;
