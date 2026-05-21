import {getUsers} from "../../controllers/users.controllers.js";
import express from "express";
import {Router} from "express";



const userRoutes = Router();
userRoutes.get("/", getUsers);

export default userRoutes;