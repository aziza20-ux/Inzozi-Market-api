import { Router } from 'express';
import { createProfile, getProfiles, getProfileById, updateProfile, updateProfileStatus } from '../../controllers/creator-profile.controller';
import {authenticate} from "../../middleware/auth"

const router = Router();

router.post('/', authenticate, createProfile);
router.get('/', getProfiles);
router.get('/:id', getProfileById);
router.put('/:id', authenticate, updateProfile);
router.patch('/:id/status', authenticate, updateProfileStatus);

export default router;
