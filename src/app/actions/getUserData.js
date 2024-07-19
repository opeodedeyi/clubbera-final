'use server';

import { A_COOKIE_NAME } from "@/constants";
import { cookies } from 'next/headers';
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import NodeCache from 'node-cache';


const cache = new NodeCache({ stdTTL: 60 * 30, checkperiod: 60 * 10 });

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
        const cachedUser = cache.get(token);

        if (cachedUser) {
            return cachedUser;
        }

        const user = await fetchUserFromAPI(token);
        if (user) {
            cache.set(token, user);
        }

        return user;
    } catch (error) {
        console.error('Error in getUserData:', error);
        return null;
    }
}