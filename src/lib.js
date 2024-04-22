'use server';

import { A_COOKIE_NAME } from "@/constants";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from "next/headers";
import { B_COOKIE_NAME } from "@/constants";


const USER_SESSION_SECRET = process.env.USER_SESSION_SECRET;
const key = new TextEncoder().encode(USER_SESSION_SECRET);

export async function encrypt(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(key);
}

export async function decrypt(token) {
    const { payload } = await jwtVerify(token, key, {
        algorithms: ['HS256'],
    });

    return payload;
}

export async function getUserSession() {
    const cookieStore = cookies();
    const token = cookieStore.get(B_COOKIE_NAME)?.value;

    if (token) {
        try {
            const user = await decrypt(token);
            return {
                user,
                isLoggedIn: true
            }
        } catch (error) {
            return {
                user: null,
                isLoggedIn: false
            }
        }
    }

    return {
        user: null,
        isLoggedIn: false
    }
}

export async function verifyUser(request) {
    const API_URL = process.env.API_URL
    const token = request.cookies.get(A_COOKIE_NAME)?.value;

    if (token) {
        try {
            const response = await fetchWithTimeout(`${API_URL}/user/auth/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            }, 2000);
            const data = await response.json();

            if (!data.success) {
                return false;
            }

            const updatedData = {
                user: await encrypt(data.user),
                success: data.success
            }

            return updatedData
        } catch (error) {
            return false;
        }
    }

    return false;
}
