import { Router } from 'express';
import { createProfile, getProfiles, getProfileById, updateProfile, updateProfileStatus } from '../../controllers/creator-profile.controller';
import {authenticate} from "../../middleware/auth"

const router = Router();

/**
 * @openapi
 * /creator-profile:
 *   post:
 *     tags:
 *       - Creator Profile
 *     summary: Create the authenticated creator profile
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               bio:
 *                 type: string
 *               specialization:
 *                 type: string
 *               socialLinks:
 *                 type: string
 *               earnings:
 *                 type: number
 *               followers:
 *                 type: number
 *               avatar:
 *                 type: string
 *               location:
 *                 type: string
 *               payout_account:
 *                 type: string
 *               payout_network:
 *                 type: string
 *     responses:
 *       201:
 *         description: Profile created
 */
router.post('/', authenticate, createProfile);

/**
 * @openapi
 * /creator-profile:
 *   get:
 *     tags:
 *       - Creator Profile
 *     summary: List creator profiles
 *     parameters:
 *       - in: query
 *         name: niche
 *         schema:
 *           type: string
 *       - in: query
 *         name: country
 *         schema:
 *           type: string
 *       - in: query
 *         name: display_name
 *         schema:
 *           type: string
 *       - in: query
 *         name: cursor
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Creator profiles list
 */
router.get('/', getProfiles);

/**
 * @openapi
 * /creator-profile/{id}:
 *   get:
 *     tags:
 *       - Creator Profile
 *     summary: Get a creator profile by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Creator profile details
 *       404:
 *         description: Profile not found
 */
router.get('/:id', getProfileById);

/**
 * @openapi
 * /creator-profile/{id}:
 *   put:
 *     tags:
 *       - Creator Profile
 *     summary: Update a creator profile
 *     security:
 *       - bearerAuth: []
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
 *               bio:
 *                 type: string
 *               specialization:
 *                 type: string
 *               socialLinks:
 *                 type: string
 *               earnings:
 *                 type: number
 *               followers:
 *                 type: number
 *               avatar:
 *                 type: string
 *               location:
 *                 type: string
 *               payout_account:
 *                 type: string
 *               payout_network:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated profile
 */
router.put('/:id', authenticate, updateProfile);

/**
 * @openapi
 * /creator-profile/{id}/status:
 *   patch:
 *     tags:
 *       - Creator Profile
 *     summary: Update a creator profile status field
 *     security:
 *       - bearerAuth: []
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
 *             required: [profile_status]
 *             properties:
 *               profile_status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated profile
 */
router.patch('/:id/status', authenticate, updateProfileStatus);

export default router;
