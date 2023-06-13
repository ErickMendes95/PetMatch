-- CreateEnum
CREATE TYPE "Size" AS ENUM ('small', 'medium', 'large');

-- AlterTable
ALTER TABLE "Pet" ADD COLUMN     "size" "Size",
ADD COLUMN     "species" VARCHAR(255),
ADD COLUMN     "weight" INTEGER;
