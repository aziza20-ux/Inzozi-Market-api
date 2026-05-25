import { Router } from 'express';
import { createPayment, getPaymentById, getPayments } from '../controllers/payment.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.post('/', authMiddleware, createPayment);
router.get('/', authMiddleware, getPayments);
router.get('/:id', authMiddleware, getPaymentById);

export default router;
