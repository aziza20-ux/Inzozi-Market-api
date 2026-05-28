# Inzozi Market API

Backend API for the Inzozi Market creator economy platform.

## Overview

- REST API built with Express and TypeScript.
- Prisma is used for database access.
- Redis is used for OTPs, refresh tokens, and idempotency locks.
- Swagger UI is available for API documentation.

## Prerequisites

- Node.js 18 or newer.
- npm.
- Docker and Docker Compose.

## Local Setup

1. Install dependencies.

```bash
npm install
```

2. Start local infrastructure.

```bash
docker compose up -d
```

This starts:

- PostgreSQL on `localhost:5432`
- Redis on `localhost:6379`

3. Create a `.env` file in the project root.

```env
PORT=3000
DATABASE_URL=postgresql://inzozi:password@localhost:5432/inzozi_db
JWT_SECRET=your-secret-key
REDIS_URL=redis://localhost:6379

# Optional email settings for verification OTPs
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
FROM_EMAIL=

# Optional Cloudinary settings if you are using Cloudinary uploads
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Storage service defaults for local development
STORAGE_DRIVER=local
LOCAL_STORAGE_DIR=storage/uploads
LOCAL_STORAGE_PUBLIC_BASE_URL=https://local-storage.inzozi.test
```

4. Apply Prisma migrations and generate the client.

```bash
npx prisma migrate dev
npx prisma generate
```

5. Seed the database if you want sample data.

```bash
npx prisma db seed
```

6. Start the development server.

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - start the API in watch mode with `tsx`.
- `npm run build` - compile TypeScript to `dist`.
- `npm start` - run the compiled server from `dist/index.js`.

## API Access

- Base API: `http://localhost:3000/api/v1`
- Health check: `http://localhost:3000/health`
- Swagger UI: `http://localhost:3000/api-docs`

## Storage Notes

By default, the app uses the local storage driver defined in `src/services/storage.service.ts`.

- Upload metadata is written under `storage/uploads`.
- Use the returned `publicUrl` from `/api/v1/content/upload-url` as the `media_url` or `contentUrl` when creating content.

## Notes

- Authentication uses JWTs.
- Redis has a local in-memory fallback in test mode when `REDIS_URL` is not set.
- The repository already includes route-level Swagger comments under `src/routes/v1`.