"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../../controllers/auth.controller");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Register a new account
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
 *                 format: email
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *             oneOf:
 *               - required: [email, password]
 *               - required: [phone, password]
 *     responses:
 *       201:
 *         description: User registered and verification code created
 *       400:
 *         description: Invalid request body
 *       409:
 *         description: Email already in use
 */
router.post('/register', auth_controller_1.register); //done
/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Log in and receive tokens
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Access and refresh tokens
 *       400:
 *         description: Invalid request body
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', auth_controller_1.login); //done
/**
 * @openapi
 * /auth/verify:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Verify a newly registered account
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [otp]
 *             properties:
 *               userId:
 *                 type: string
 *                 format: uuid
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               otp:
 *                 type: string
 *     responses:
 *       200:
 *         description: Account verified
 *       400:
 *         description: Invalid or expired OTP
 */
router.post('/verify', auth_controller_1.verify);
/**
 * @openapi
 * /auth/resend-otp:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Resend an OTP to a registered user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 format: uuid
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *             oneOf:
 *               - required: [userId]
 *               - required: [email]
 *               - required: [phone]
 *     responses:
 *       200:
 *         description: OTP resent successfully
 *       404:
 *         description: User not found
 */
router.post('/resend-otp', auth_controller_1.resendOtp);
/**
 * @openapi
 * /auth/refresh:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Exchange a refresh token for a new token pair
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [refreshToken]
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Rotated access and refresh tokens
 *       401:
 *         description: Invalid or expired refresh token
 */
router.post('/refresh', auth_controller_1.refresh);
/**
 * @openapi
 * /auth/logout:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Revoke a refresh token
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Logged out
 */
router.post('/logout', auth_controller_1.logout);
exports.default = router;
