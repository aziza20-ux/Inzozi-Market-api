import userRouters from "./users.routes.js";
import contentRouters from "./content.routes.js";
import campaignRouters from "./campaign.routes.js";
import paymentRouters from "./payment.routes.js";
import messageRouters from "./message.routes.js";
import authRouters from "./auth.routes.js";
import { Router } from "express";

const v1Routes = Router();
v1Routes.use("/auth", authRouters);
v1Routes.use("/users", userRouters);
v1Routes.use("/content", contentRouters);
v1Routes.use("/campaigns", campaignRouters);
v1Routes.use("/payments", paymentRouters);
v1Routes.use("/messages", messageRouters);

export default v1Routes;
