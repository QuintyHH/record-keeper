-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vinyl" (
    "id" SERIAL NOT NULL,
    "albumName" TEXT NOT NULL,
    "artistName" TEXT NOT NULL,
    "albumCoverURL" TEXT NOT NULL,

    CONSTRAINT "Vinyl_pkey" PRIMARY KEY ("id")
);
