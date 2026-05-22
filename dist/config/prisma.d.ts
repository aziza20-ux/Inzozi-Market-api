import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
declare const prisma: PrismaClient<{
    adapter: PrismaPg;
}, never, import("../generated/prisma/runtime/client").DefaultArgs>;
export declare function connectDB(): Promise<void>;
export default prisma;
//# sourceMappingURL=prisma.d.ts.map