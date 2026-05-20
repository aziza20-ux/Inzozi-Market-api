import userRouters from "./users.routes";
import {Router} from "express";
 

const v1Routes= Router();
v1Routes.use("/users", userRouters);

export default v1Routes;