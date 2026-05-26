import { Router } from "express";
import {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	getUserContents,
	getUserCampaigns,
	getUserMessages,
	usersStats,
} from "../../controllers/users.controllers";
import { authenticate } from "../../middleware/auth";

const userRoutes = Router();

userRoutes.get("/", getUsers);//test done
userRoutes.get("/stats", usersStats); //test done
userRoutes.post("/", createUser); //test done
userRoutes.get("/:id", getUserById);//test done
userRoutes.put("/:id", updateUser);//test done
userRoutes.delete("/:id", deleteUser);// test done
userRoutes.get("/:id/contents", getUserContents);//test done
userRoutes.get("/:id/campaigns", getUserCampaigns); //test done
userRoutes.get("/:id/messages", getUserMessages);//test done

export default userRoutes;