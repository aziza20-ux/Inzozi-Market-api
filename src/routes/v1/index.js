import userRouters from "./users.routes.js";
import contentRouters from "./content.routes.js";
import { Router } from "express";
const v1Routes = Router();
v1Routes.use("/users", userRouters);
v1Routes.use("/content", contentRouters);
export default v1Routes;
//# sourceMappingURL=index.js.map