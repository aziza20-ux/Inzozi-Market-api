"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
require("dotenv/config");
const client_1 = require("../generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const databaseUrl = process.env['DATABASE_URL'];
if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set');
}
const adapter = new adapter_pg_1.PrismaPg({ connectionString: databaseUrl });
const prisma = new client_1.PrismaClient({ adapter });
async function connectDB() {
    await prisma.$connect();
    console.log('Database connected successfully');
}
exports.default = prisma;
