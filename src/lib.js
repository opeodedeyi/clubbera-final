'use server';

import { A_COOKIE_NAME } from "@/constants";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";

export async function verifyToken(request) {
    const API_URL = process.env.API_URL
    const token = request.cookies.get(A_COOKIE_NAME)?.value;

    if (!token) {
        throw new Error('No token found');
    }

    try {
        const response = await fetchWithTimeout(`${API_URL}/user/auth/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        }, 2000);

        if (!response.ok) {
            throw new Error('Failed to verify token');
        }
        
        return response;
    } catch (error) {
        throw new Error('Token verification failed');
    }
}