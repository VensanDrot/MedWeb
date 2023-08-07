-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "icon" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
