'use server'

import { setAuthCookie } from "@/app/actions/setAuthCookie";
import { redirect } from 'next/navigation';
import { fetchWithTimeout } from '@/utils/fetchWithTimeout';

export async function googleLogin(token, tokenType = 'idToken') {
    try {
        const body = tokenType === 'code' 
            ? { code: token }
            : { idToken: token };

        const response = await fetchWithTimeout(`${process.env.API_URL}/user/googleauth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }, 3000)

        const data = await response.json()

        if (data.success) {
            await setAuthCookie(data.token);
            redirect('/')
        } else {
            throw new Error(data.message || 'Authentication failed')
        }
    } catch (error) {
        console.error('Google login error:', error)
        throw error
    }
}