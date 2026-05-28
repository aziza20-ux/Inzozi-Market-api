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
} from "../../controllers/users.controller";
import { authenticate } from "../../middleware/auth";

const userRoutes = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: List users with pagination
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number starting at 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Page size
 *     responses:
 *       200:
 *         description: Paginated users
 */
userRoutes.get("/", getUsers);//test done

/**
 * @openapi
 * /users/stats:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get aggregate user statistics
 *     responses:
 *       200:
 *         description: User statistics grouped by role
 */
userRoutes.get("/stats", usersStats); //test done

/**
 * @openapi
 * /users:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password, role]
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *               profileImage:
 *                 type: string
 *               role:
 *                 type: string
 *               verificationStatus:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Invalid request body
 *       409:
 *         description: User already exists
 */
userRoutes.post("/", createUser); //test done

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 */
userRoutes.get("/:id", getUserById);//test done

/**
 * @openapi
 * /users/{id}:
 *   put:
 *     tags:
 *       - Users
 *     summary: Update a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profileImage:
 *                 type: string
 *               role:
 *                 type: string
 *               verificationStatus:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated user
 *       404:
 *         description: User not found
 */
userRoutes.put("/:id", updateUser);//test done

/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: User deleted
 *       404:
 *         description: User not found
 */
userRoutes.delete("/:id", deleteUser);// test done

/**
 * @openapi
 * /users/{id}/contents:
 *   get:
 *     tags:
 *       - Users
 *     summary: List content created by a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User content list
 */
userRoutes.get("/:id/contents", getUserContents);//test done

/**
 * @openapi
 * /users/{id}/campaigns:
 *   get:
 *     tags:
 *       - Users
 *     summary: List campaigns owned by a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: User campaigns
 */
userRoutes.get("/:id/campaigns", getUserCampaigns); //test done

/**
 * @openapi
 * /users/{id}/messages:
 *   get:
 *     tags:
 *       - Users
 *     summary: List messages sent or received by a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: User messages
 */
userRoutes.get("/:id/messages", getUserMessages);//test done

export default userRoutes;