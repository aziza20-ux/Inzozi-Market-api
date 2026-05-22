import prisma from "../config/prisma.js";
export async function getUsers(req, res) {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    }
    catch {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
//hi
//# sourceMappingURL=users.controllers.js.map