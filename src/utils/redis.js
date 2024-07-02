import { createClient } from 'redis';


export async function getRedisClient() {
    const client = createClient({
        url: process.env.REDIS_URL || 'redis://localhost:6379'
    });
    await client.connect();
    return client;
}