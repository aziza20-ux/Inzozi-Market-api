import { Router } from 'express';
<<<<<<< HEAD
import {
  register,
  login,
  verify,
  resendOtp,
  refresh,
  logout,
} from '../../controllers/auth.controller';
=======
import { forgotPassword, login, logout, refresh, register, resetPassword, verify } from '../../controllers/auth.controller';
>>>>>>> origin/espy

const router = Router();

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
router.post('/register', register); //done

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
router.post('/login', login); //done

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
router.post('/verify', verify);

/**
 * @openapi
<<<<<<< HEAD
 * /auth/resend-otp:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Resend an OTP to a registered user
=======
 * /auth/forgot-password:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Send a password reset code to a user's email
>>>>>>> origin/espy
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
<<<<<<< HEAD
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
router.post('/resend-otp', resendOtp);
=======
 *             required: [email]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *     responses:
 *       200:
 *         description: Reset code sent
 *       400:
 *         description: Invalid request body
 *       404:
 *         description: User not found
 */
router.post('/forgot-password', forgotPassword);

/**
 * @openapi
 * /auth/reset-password:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Reset a password using a verification code
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, otp, password]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               otp:
 *                 type: string
 *               password:
 *                 type: string
 *                 minLength: 8
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Invalid or expired OTP
 *       404:
 *         description: User not found
 */
router.post('/reset-password', resetPassword);
>>>>>>> origin/espy

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
router.post('/refresh', refresh);

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
router.post('/logout', logout);

export default router;
