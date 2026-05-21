import { redis } from './redis.service';

export const acquireIdempotencyLock = async (key: string): Promise<boolean> => {
  const result = await redis.setnx(`idempotency_lock:${key}`, 'locked');
  if (result === 1) {
    await redis.expire(`idempotency_lock:${key}`, 60); // 1 minute lock
    return true;
  }
  return false;
};

export const releaseIdempotencyLock = async (key: string): Promise<void> => {
  await redis.del(`idempotency_lock:${key}`);
};
