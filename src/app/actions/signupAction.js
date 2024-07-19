'use server';

import { fetchWithTimeout } from '@/utils/fetchWithTimeout';
import { setAuthCookie } from "@/app/actions/setAuthCookie";


export async function signupAction(formData) {
    try {
        const response = await fetchWithTimeout(`${process.env.API_URL}/user/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName: formData.fullName,
                email: formData.email,
                password: formData.password,
                city: formData.cityLocation,
                lat: formData.latLocation,
                lng: formData.lngLocation,
            }),
        }, 5000);

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