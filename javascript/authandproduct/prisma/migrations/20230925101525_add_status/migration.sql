-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL DEFAULT 0.00,
    "description" TEXT,
    "barcode" TEXT,
    "qty" INTEGER NOT NULL,
    "expiry" DATETIME,
    "reorder_level" INTEGER NOT NULL DEFAULT 10,
    "qty_sold" INTEGER NOT NULL DEFAULT 0,
    "min_qty" INTEGER NOT NULL DEFAULT 15,
    "picture" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT,
    "status" TEXT NOT NULL DEFAULT 'In-Stock',
    CONSTRAINT "products_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_products" ("barcode", "createdAt", "description", "expiry", "id", "min_qty", "name", "picture", "price", "qty", "qty_sold", "reorder_level", "updatedAt", "userId") SELECT "barcode", "createdAt", "description", "expiry", "id", "min_qty", "name", "picture", "price", "qty", "qty_sold", "reorder_level", "updatedAt", "userId" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
