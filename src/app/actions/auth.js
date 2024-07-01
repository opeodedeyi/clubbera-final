'use server';

import { A_COOKIE_NAME } from "@/constants";
import { cookies } from 'next/headers';
import { getRedisClient } from '@/utils/redis';


export async function logout() {
    const token = cookies().get(A_COOKIE_NAME)?.value;

    cookies().delete(A_COOKIE_NAME);

    if (token) {
        try {
            const client = await getRedisClient();
        
            await client.del(token);
            await client.quit();
        } catch (error) {
            console.error('Error clearing Redis cache:', error);
        }
    }
}