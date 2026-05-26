import { Router } from 'express';
import { register, login, verify, refresh, logout } from '../../controllers/auth.controller';

const router = Router();

router.post('/register', register); //done
router.post('/login', login); //done
router.post('/verify', verify);
router.patch('/verify', verify);
router.post('/refresh', refresh);
router.post('/logout', logout);

export default router;
