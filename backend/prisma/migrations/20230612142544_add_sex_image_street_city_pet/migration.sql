/*
  Warnings:

  - You are about to alter the column `cep` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `street` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `city` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `state` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `neighborhood` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `number` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `addressDetail` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `phone` on the `Address` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `race` on the `Pet` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `city` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sex` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('M', 'F');

-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "cep" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "street" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "city" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "state" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "neighborhood" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "number" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "addressDetail" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "phone" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "city" VARCHAR(255) NOT NULL,
ADD COLUMN     "image" VARCHAR(255) NOT NULL,
ADD COLUMN     "sex" "Sex" NOT NULL,
ADD COLUMN     "street" VARCHAR(255) NOT NULL,
ALTER COLUMN "race" SET DATA TYPE VARCHAR(255);
