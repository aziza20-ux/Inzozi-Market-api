import Redis from 'ioredis';

type RedisLike = {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, ...args: any[]): Promise<any>;
  del(key: string): Promise<number>;
  setnx(key: string, value: string): Promise<number>;
  expire(key: string, seconds: number): Promise<number>;
};

class InMemoryRedis implements RedisLike {
  private store = new Map<string, { value: string; expiresAt?: number }>();

  private cleanup(key: string) {
    const entry = this.store.get(key);
    if (!entry) return false;
    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return false;
    }
    return true;
  }

  async get(key: string) {
    if (!this.cleanup(key)) return null;
    return this.store.get(key)!.value;
  }

  async set(key: string, value: string, ...args: any[]) {
    let expiresAt: number | undefined;
    // support: set(key, value, 'EX', seconds)
    if (args && args.length >= 2 && String(args[0]).toUpperCase() === 'EX') {
      const seconds = Number(args[1]);
      if (!Number.isNaN(seconds)) expiresAt = Date.now() + seconds * 1000;
    }
    this.store.set(key, { value, expiresAt });
    return 'OK';
  }

  async del(key: string) {
    return this.store.delete(key) ? 1 : 0;
  }

  async setnx(key: string, value: string) {
    if (this.store.has(key) && this.cleanup(key)) return 0;
    await this.set(key, value);
    return 1;
  }

  async expire(key: string, seconds: number) {
    const entry = this.store.get(key);
    if (!entry || !this.cleanup(key)) return 0;
    entry.expiresAt = Date.now() + seconds * 1000;
    this.store.set(key, entry);
    return 1;
  }
}

export let redis: RedisLike;

async function initRedis() {
  const url = process.env.REDIS_URL || 'redis://localhost:6379';
  if (!process.env.REDIS_URL && process.env.NODE_ENV === 'test') {
    // In tests with no redis, use in-memory
    redis = new InMemoryRedis();
    console.log('Using in-memory Redis (test mode)');
    return;
  }

  const client = new Redis(url, {
    lazyConnect: true,
    connectTimeout: 2000,
    retryStrategy: () => null,
    maxRetriesPerRequest: 1,
    enableOfflineQueue: false,
  });

  let connected = false;

  // Log errors but rate-limit repeated logs. This must be attached before
  // connecting so startup failures do not print raw ioredis stack traces.
  let lastLog = 0;
  client.on('error', (err: Error) => {
    if (!connected) return;
    const now = Date.now();
    if (now - lastLog > 5000) {
      console.warn('Redis connection error:', err.message);
      lastLog = now;
    }
  });

  try {
    // Try a quick ping with timeout
    await Promise.race([
      client.connect().then(() => client.ping()),
      new Promise((_, reject) => setTimeout(() => reject(new Error('ping timeout')), 2000)),
    ]);
    connected = true;
  } catch (err: any) {
    const reason = err.message || err;
    console.warn(`Using in-memory Redis fallback; Redis not available: ${reason}`);
  }

  if (connected) {
    redis = client as unknown as RedisLike;
    console.log('Connected to Redis at', url);
  } else {
    redis = new InMemoryRedis();
    // Ensure the client is closed to avoid background reconnect attempts
    try {
      client.disconnect();
    } catch (e) {
      // ignore
    }
  }
}

initRedis().catch((err) => {
  console.error('Failed to initialize Redis service:', err);
  redis = new InMemoryRedis();
});
