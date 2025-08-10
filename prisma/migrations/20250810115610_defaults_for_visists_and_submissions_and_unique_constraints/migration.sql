/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `Form` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Form" ALTER COLUMN "visits" SET DEFAULT 0,
ALTER COLUMN "submissions" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Form_name_userId_key" ON "public"."Form"("name", "userId");
