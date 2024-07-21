-- CreateTable
CREATE TABLE "Picture" (
    "id" SERIAL NOT NULL,
    "artist_id" INTEGER NOT NULL,
    "picture_url" TEXT NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "prices" INTEGER NOT NULL,
    "deposit" INTEGER NOT NULL,
    "fees" INTEGER NOT NULL,
    "artist_id" INTEGER NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "appointment" TIMESTAMP(3) NOT NULL,
    "service_id" INTEGER NOT NULL,
    "artist_id" INTEGER NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TattooCategory" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "TattooCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Statistic" (
    "id" SERIAL NOT NULL,
    "total_users" INTEGER NOT NULL,
    "total_artist" INTEGER NOT NULL,
    "total_comments" INTEGER NOT NULL,
    "total_reviews" INTEGER NOT NULL,
    "most_popular_comments" TEXT NOT NULL,
    "top_rated_artists" TEXT NOT NULL,
    "search_trends" TEXT NOT NULL,

    CONSTRAINT "Statistic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "artist_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "note" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArtistToTattooCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "Picture_artist_id_idx" ON "Picture"("artist_id");

-- CreateIndex
CREATE INDEX "Service_artist_id_idx" ON "Service"("artist_id");

-- CreateIndex
CREATE INDEX "Booking_artist_id_idx" ON "Booking"("artist_id");

-- CreateIndex
CREATE INDEX "Booking_service_id_idx" ON "Booking"("service_id");

-- CreateIndex
CREATE UNIQUE INDEX "TattooCategory_category_key" ON "TattooCategory"("category");

-- CreateIndex
CREATE INDEX "Comment_artist_id_idx" ON "Comment"("artist_id");

-- CreateIndex
CREATE INDEX "Comment_user_id_idx" ON "Comment"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "_ArtistToTattooCategory_AB_unique" ON "_ArtistToTattooCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_ArtistToTattooCategory_B_index" ON "_ArtistToTattooCategory"("B");

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToTattooCategory" ADD CONSTRAINT "_ArtistToTattooCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArtistToTattooCategory" ADD CONSTRAINT "_ArtistToTattooCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "TattooCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
