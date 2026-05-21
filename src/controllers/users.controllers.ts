import prisma from "../config/prisma.js";
import type { Request, Response } from "express";

export async function getUsers(req: Request, res: Response) {
    try{
        const users = await prisma.user.findMany();
        res.json(users);
    } catch{
        res.status(500).json({error: "Internal Server Error"});
    }

}
//hi