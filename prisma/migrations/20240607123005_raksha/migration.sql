/*
  Warnings:

  - You are about to drop the column `company` on the `JobPosting` table. All the data in the column will be lost.
  - Added the required column `author` to the `JobPosting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobPosting" DROP COLUMN "company",
ADD COLUMN     "author" TEXT NOT NULL,
ALTER COLUMN "salary" DROP NOT NULL;
