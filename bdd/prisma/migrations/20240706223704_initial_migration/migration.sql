-- CreateTable
CREATE TABLE "Profil" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "dateCreation" TIMESTAMP(3) NOT NULL,
    "typeProfil" TEXT NOT NULL,

    CONSTRAINT "Profil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "budget" DOUBLE PRECISION,
    "preferences" TEXT,
    "zoneGeographique" TEXT NOT NULL,
    "profilId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "siteWeb" TEXT NOT NULL,
    "zoneGeographique" TEXT NOT NULL,
    "reseaux" JSONB NOT NULL,
    "experience" TEXT NOT NULL,
    "certificats" TEXT NOT NULL,
    "cgu" TEXT,
    "profilId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modo" (
    "id" SERIAL NOT NULL,
    "nombreReports" INTEGER NOT NULL,
    "reportsEffectues" JSONB NOT NULL,
    "profilId" INTEGER NOT NULL,
    "modoId" INTEGER NOT NULL,

    CONSTRAINT "Modo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "profilId" INTEGER NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_profilId_key" ON "User"("profilId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_profilId_key" ON "Artist"("profilId");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_artistId_key" ON "Artist"("artistId");

-- CreateIndex
CREATE UNIQUE INDEX "Modo_profilId_key" ON "Modo"("profilId");

-- CreateIndex
CREATE UNIQUE INDEX "Modo_modoId_key" ON "Modo"("modoId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_profilId_key" ON "Admin"("profilId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_adminId_key" ON "Admin"("adminId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modo" ADD CONSTRAINT "Modo_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
