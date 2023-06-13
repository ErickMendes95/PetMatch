/*
  Warnings:

  - You are about to drop the column `street` on the `Pet` table. All the data in the column will be lost.
  - Added the required column `state` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "street",
ADD COLUMN     "state" VARCHAR(255) NOT NULL;
