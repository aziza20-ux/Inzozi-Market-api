import { Router } from 'express';
import { createPayment, getPaymentById, getPayments } from '../../controllers/payment.controller';
import {authenticate} from "../../middleware/auth"


const router = Router();

router.post('/', authenticate, createPayment);
router.get('/', authenticate, getPayments);
router.get('/:id', authenticate, getPaymentById);

export default router;
