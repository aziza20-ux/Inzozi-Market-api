import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client';

import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env['DATABASE_URL'] as string });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  // Clean existing data first — order matters because of foreign keys
  // Delete in reverse order of dependencies

  await prisma.user.deleteMany();

  console.log('🗑️  Cleared existing data');

  // ─── Seed ADMIN User First ────────────────────────────────────────────────

  const alice = await prisma.user.create({
    data: {
      name: 'alice',
      email: 'admin@airbnb.com',
      password: 'password',
      role: 'ADMIN',
    },
  });
  console.log('👨‍💼 Created alice user');
}

main()
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
