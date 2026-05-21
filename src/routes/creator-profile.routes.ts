import { Router } from 'express';
import { createProfile, getProfiles, getProfileById, updateProfile, updateProfileStatus } from '../controllers/creator-profile.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.post('/', authMiddleware, createProfile);
router.get('/', getProfiles);
router.get('/:id', getProfileById);
router.patch('/:id', authMiddleware, updateProfile);
router.patch('/:id/status', authMiddleware, updateProfileStatus);

export default router;
