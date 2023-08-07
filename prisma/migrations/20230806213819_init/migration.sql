/*
  Warnings:

  - Added the required column `productType` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "productType" TEXT NOT NULL;
