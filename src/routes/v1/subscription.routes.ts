import { Router } from 'express';
import { subscribeToCreator, getMySubscriptions, getCreatorSubscribers } from '../../controllers/subscription.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();

/**
 * @openapi
 * /subscriptions/subscribe/{creatorId}:
 *   post:
 *     tags:
 *       - Subscriptions
 *     summary: Subscribe to a creator
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: creatorId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Successfully subscribed
 */
router.post('/subscribe/:creatorId', authenticate, subscribeToCreator);

/**
 * @openapi
 * /subscriptions/me:
 *   get:
 *     tags:
 *       - Subscriptions
 *     summary: Get my subscriptions
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of subscriptions
 */
router.get('/me', authenticate, getMySubscriptions);

/**
 * @openapi
 * /subscriptions/creator:
 *   get:
 *     tags:
 *       - Subscriptions
 *     summary: Get subscribers for the current creator
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of subscribers
 */
router.get('/creator', authenticate, getCreatorSubscribers);

export default router;
