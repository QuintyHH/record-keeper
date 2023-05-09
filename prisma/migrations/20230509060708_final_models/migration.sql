-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vinyl" (
    "id" TEXT NOT NULL,
    "albumName" TEXT NOT NULL,
    "artistName" TEXT NOT NULL,
    "albumCoverURL" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vinyl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserToVinyl" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_UserToVinyl_AB_unique" ON "_UserToVinyl"("A", "B");

-- CreateIndex
CREATE INDEX "_UserToVinyl_B_index" ON "_UserToVinyl"("B");

-- AddForeignKey
ALTER TABLE "_UserToVinyl" ADD CONSTRAINT "_UserToVinyl_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserToVinyl" ADD CONSTRAINT "_UserToVinyl_B_fkey" FOREIGN KEY ("B") REFERENCES "Vinyl"("id") ON DELETE CASCADE ON UPDATE CASCADE;
