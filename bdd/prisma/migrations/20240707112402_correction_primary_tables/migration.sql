/*
  Warnings:

  - You are about to drop the column `adminId` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `profilId` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `artistId` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `profilId` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `zoneGeographique` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `modoId` on the `Modo` table. All the data in the column will be lost.
  - You are about to drop the column `nombreReports` on the `Modo` table. All the data in the column will be lost.
  - You are about to drop the column `profilId` on the `Modo` table. All the data in the column will be lost.
  - You are about to drop the column `reportsEffectues` on the `Modo` table. All the data in the column will be lost.
  - You are about to drop the column `dateCreation` on the `Profil` table. All the data in the column will be lost.
  - You are about to drop the column `motDePasse` on the `Profil` table. All the data in the column will be lost.
  - You are about to drop the column `nom` on the `Profil` table. All the data in the column will be lost.
  - You are about to drop the column `prenom` on the `Profil` table. All the data in the column will be lost.
  - You are about to drop the column `typeProfil` on the `Profil` table. All the data in the column will be lost.
  - You are about to drop the column `profilId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `zoneGeographique` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profil_id]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[admin_id]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profil_id]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[artist_id]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profil_id]` on the table `Modo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[modo_id]` on the table `Modo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mail]` on the table `Profil` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profil_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `admin_id` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profil_id` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `artist_id` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profil_id` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modo_id` to the `Modo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number_reports` to the `Modo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profil_id` to the `Modo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reports` to the `Modo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Profil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Profil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profil_type` to the `Profil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Profil` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profil_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProfilType" AS ENUM ('USER', 'ARTIST', 'MODO', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_profilId_fkey";

-- DropForeignKey
ALTER TABLE "Artist" DROP CONSTRAINT "Artist_profilId_fkey";

-- DropForeignKey
ALTER TABLE "Modo" DROP CONSTRAINT "Modo_profilId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profilId_fkey";

-- DropIndex
DROP INDEX "Admin_adminId_key";

-- DropIndex
DROP INDEX "Admin_profilId_key";

-- DropIndex
DROP INDEX "Artist_artistId_key";

-- DropIndex
DROP INDEX "Artist_profilId_key";

-- DropIndex
DROP INDEX "Modo_modoId_key";

-- DropIndex
DROP INDEX "Modo_profilId_key";

-- DropIndex
DROP INDEX "User_profilId_key";

-- DropIndex
DROP INDEX "User_userId_key";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "adminId",
DROP COLUMN "profilId",
ADD COLUMN     "admin_id" INTEGER NOT NULL,
ADD COLUMN     "profil_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Artist" DROP COLUMN "artistId",
DROP COLUMN "profilId",
DROP COLUMN "zoneGeographique",
ADD COLUMN     "artist_id" INTEGER NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "profil_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Modo" DROP COLUMN "modoId",
DROP COLUMN "nombreReports",
DROP COLUMN "profilId",
DROP COLUMN "reportsEffectues",
ADD COLUMN     "modo_id" INTEGER NOT NULL,
ADD COLUMN     "number_reports" INTEGER NOT NULL,
ADD COLUMN     "profil_id" INTEGER NOT NULL,
ADD COLUMN     "reports" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Profil" DROP COLUMN "dateCreation",
DROP COLUMN "motDePasse",
DROP COLUMN "nom",
DROP COLUMN "prenom",
DROP COLUMN "typeProfil",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "profil_type" "ProfilType" NOT NULL,
ADD COLUMN     "surname" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profilId",
DROP COLUMN "userId",
DROP COLUMN "zoneGeographique",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "profil_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "lattitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "enterprise_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postal_code" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "schedules" JSONB NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Location_city_postal_code_idx" ON "Location"("city", "postal_code");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_profil_id_key" ON "Admin"("profil_id");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_admin_id_key" ON "Admin"("admin_id");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_profil_id_key" ON "Artist"("profil_id");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_artist_id_key" ON "Artist"("artist_id");

-- CreateIndex
CREATE UNIQUE INDEX "Modo_profil_id_key" ON "Modo"("profil_id");

-- CreateIndex
CREATE UNIQUE INDEX "Modo_modo_id_key" ON "Modo"("modo_id");

-- CreateIndex
CREATE UNIQUE INDEX "Profil_mail_key" ON "Profil"("mail");

-- CreateIndex
CREATE INDEX "Profil_mail_idx" ON "Profil"("mail");

-- CreateIndex
CREATE UNIQUE INDEX "User_profil_id_key" ON "User"("profil_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_id_key" ON "User"("user_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profil_id_fkey" FOREIGN KEY ("profil_id") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_profil_id_fkey" FOREIGN KEY ("profil_id") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modo" ADD CONSTRAINT "Modo_profil_id_fkey" FOREIGN KEY ("profil_id") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_profil_id_fkey" FOREIGN KEY ("profil_id") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
