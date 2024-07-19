'use server';

import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import { setAuthCookie } from "@/app/actions/setAuthCookie";


export async function loginAction(email, password) {
    try {
        const response = await fetchWithTimeout(`${process.env.API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        }, 3000);

        const data = await response.json();

        if (data.success) {
            await setAuthCookie(data.token);
            return { success: true, data };
        }
        
        return { success: false, error: data.message };
    } catch (error) {
        return { success: false, error: error.message };
    }
}