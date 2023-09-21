-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "gender" TEXT NOT NULL DEFAULT 'MALE',
    "emailAddress" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "biography" TEXT NOT NULL
);
