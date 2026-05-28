"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = require("../../controllers/users.controllers");
const userRoutes = (0, express_1.Router)();
userRoutes.get("/", users_controllers_1.getUsers); //test done
userRoutes.get("/stats", users_controllers_1.usersStats); //test done
userRoutes.post("/", users_controllers_1.createUser); //test done
userRoutes.get("/:id", users_controllers_1.getUserById); //test done
userRoutes.put("/:id", users_controllers_1.updateUser); //test done
userRoutes.delete("/:id", users_controllers_1.deleteUser); // test done
userRoutes.get("/:id/contents", users_controllers_1.getUserContents); //test done
userRoutes.get("/:id/campaigns", users_controllers_1.getUserCampaigns); //test done
userRoutes.get("/:id/messages", users_controllers_1.getUserMessages); //test done
exports.default = userRoutes;
//# sourceMappingURL=users.routes.js.map