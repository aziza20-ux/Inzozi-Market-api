"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
<<<<<<< HEAD
const multer_js_1 = __importDefault(require("../../config/multer.js"));
const users_controller_1 = require("../../controllers/users.controller");
const auth_1 = require("../../middleware/auth");
const upload_controllers_js_1 = require("../../controllers/upload.controllers.js");
const userRoutes = (0, express_1.Router)();
/**
 * @openapi
 * /users/profile-picture:
 *   post:
 *     tags:
 *       - Users
 *     summary: Upload or replace the authenticated user's profile picture
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required: [profilePicture]
 *             properties:
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Profile picture uploaded successfully
 *       400:
 *         description: No file uploaded
 *       401:
 *         description: Unauthorized
 */
userRoutes.post("/profile-picture", auth_1.authenticate, multer_js_1.default.single("profilePicture"), upload_controllers_js_1.uploadProfilePicture);
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
userRoutes.get("/", users_controller_1.getUsers); //test done
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
userRoutes.get("/stats", users_controller_1.usersStats); //test done
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
userRoutes.post("/", users_controller_1.createUser); //test done
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
userRoutes.get("/:id", users_controller_1.getUserById); //test done
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
userRoutes.put("/:id", users_controller_1.updateUser); //test done
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
userRoutes.delete("/:id", users_controller_1.deleteUser); // test done
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
userRoutes.get("/:id/contents", users_controller_1.getUserContents); //test done
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
userRoutes.get("/:id/campaigns", users_controller_1.getUserCampaigns); //test done
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
=======
const users_controller_1 = require("../../controllers/users.controller");
const userRoutes = (0, express_1.Router)();
userRoutes.get("/", users_controller_1.getUsers); //test done
userRoutes.get("/stats", users_controller_1.usersStats); //test done
userRoutes.post("/", users_controller_1.createUser); //test done
userRoutes.get("/:id", users_controller_1.getUserById); //test done
userRoutes.put("/:id", users_controller_1.updateUser); //test done
userRoutes.delete("/:id", users_controller_1.deleteUser); // test done
userRoutes.get("/:id/contents", users_controller_1.getUserContents); //test done
userRoutes.get("/:id/campaigns", users_controller_1.getUserCampaigns); //test done
>>>>>>> origin/espy
userRoutes.get("/:id/messages", users_controller_1.getUserMessages); //test done
exports.default = userRoutes;
