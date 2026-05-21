import { Router } from 'express';
import { register, login, verify, refresh, logout } from '../controllers/auth.controller';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify', verify);
router.post('/refresh', refresh);
router.post('/logout', logout);

export default router;
