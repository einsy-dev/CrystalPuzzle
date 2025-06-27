import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'student@crystal.com' },
    update: {
			name: 'Алексей Павлов Павлович',
			email: 'student@crystal.com',
		},
    create: {
      name: 'Алексей Павлов Павлович',
      email: 'student@crystal.com',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
