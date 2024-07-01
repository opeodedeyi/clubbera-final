'use server';

import { A_COOKIE_NAME } from "@/constants";
import { cookies } from 'next/headers';
import { getRedisClient } from '@/utils/redis';
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";


async function fetchUserFromAPI(token) {
    try {
        const API_URL = process.env.API_URL
        const response = await fetchWithTimeout(`${API_URL}/user/auth/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        }, 2000);
    
        const data = await response.json();
        return data.user;
    } catch (error) {
        console.error('Error fetching user from API:', error);
        return null;
    }
}

export async function getUserData() {
    const token = cookies().get(A_COOKIE_NAME)?.value;
    if (!token) return null;

    try {
        const client = await getRedisClient();

        const cachedUser = await client.get(token);

        if (cachedUser) {
            await client.quit();
            return JSON.parse(cachedUser);
        }

        const user = await fetchUserFromAPI(token);
        if (user) {
            await client.set(token, JSON.stringify(user), { EX: 3600 });
        }

        await client.quit();
        return user;
    } catch (error) {
        console.error('Error in getUserData:', error);
        return null;
    }
}