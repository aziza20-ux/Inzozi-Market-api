import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import v1Routes from './routes/v1/index.js';
import { setupSwagger } from './config/swagger.js';

import dotenv from "dotenv";

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
