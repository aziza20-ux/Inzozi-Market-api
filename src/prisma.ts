import { PrismaClient } from './generated/prisma/client';

const prisma = new PrismaClient();

export { prisma };
export type PrismaClientType = PrismaClient;
