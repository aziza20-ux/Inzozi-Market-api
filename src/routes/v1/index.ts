import { Router } from 'express';
import userRoutes from './users.routes.js';
import authRoutes from './auth.routes.js';
import campaignRoutes from './campaign.routes.js';
import creatorProfileRoutes from './creator-profile.routes.js';
import paymentRoutes from './payment.routes.js';

const v1Routes = Router();

v1Routes.use('/users', userRoutes);
v1Routes.use('/auth', authRoutes);
v1Routes.use('/campaigns', campaignRoutes);
v1Routes.use('/creator-profile', creatorProfileRoutes);
v1Routes.use('/payments', paymentRoutes);

export default v1Routes;
