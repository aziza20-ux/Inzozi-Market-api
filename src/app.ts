import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app: Application = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

import authRoutes from './routes/auth.routes';
import creatorProfileRoutes from './routes/creator-profile.routes';
import campaignRoutes from './routes/campaign.routes';
import paymentRoutes from './routes/payment.routes';
import { setupSwagger } from './swagger';

// v1 Routes will be registered here
app.use('/v1/auth', authRoutes);
app.use('/v1/creator-profiles', creatorProfileRoutes);
app.use('/v1/campaigns', campaignRoutes);
app.use('/v1/payments', paymentRoutes);

// Setup Swagger UI
setupSwagger(app);

export default app;
