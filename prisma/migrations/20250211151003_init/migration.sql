-- CreateTable
CREATE TABLE "SheetData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "SheetData_pkey" PRIMARY KEY ("id")
);
