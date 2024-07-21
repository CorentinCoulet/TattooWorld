import { PrismaClient, ProfilType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const userProfile = await prisma.profil.create({
    data: {
      name: 'John',
      surname: 'Doe',
      password: 'password123',
      mail: 'john.doe@example.com',
      profil_type: ProfilType.USER,
      user: {
        create: {
          budget: 1000,
          address: '123 Main St',
          user_id: 1, 
        },
      },
    },
  });

  const artistProfile = await prisma.profil.create({
    data: {
      name: 'Jane',
      surname: 'Smith',
      password: 'password123',
      mail: 'jane.smith@example.com',
      profil_type: ProfilType.ARTIST,
      artist: {
        create: {
          siteWeb: 'http://janesmith.com',
          location: 'Paris',
          reseaux: {},
          experience: '5 years',
          certificats: 'Certified Tattoo Artist',
          artist_id: 1,  
        },
      },
    },
  });

  const artistId = (await prisma.artist.findUnique({
    where: { profil_id: artistProfile.id }
  }))?.id;

  if (!artistId) {
    throw new Error("Artist ID not found");
  }

  const category = await prisma.tattooCategory.create({
    data: {
      category: 'Traditional',
    },
  });

  await prisma.artist.update({
    where: { id: artistId },
    data: {
      categories: {
        connect: { id: category.id },
      },
    },
  });

  await prisma.service.create({
    data: {
      prices: 150,
      deposit: 50,
      fees: 20,
      artist: {
        connect: { id: artistId },
      },
    },
  });

  console.log('Seed data created.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
