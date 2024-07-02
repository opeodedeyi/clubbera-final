'use server';

import { cookies } from 'next/headers';
import { A_COOKIE_NAME } from "@/constants";


export async function setAuthCookie(token) {
    cookies().set({
        name: A_COOKIE_NAME,
        value: token,
        path: '/',
        maxAge: 60 * 60 * 24 * 60,
        sameSite: 'lax',
        secure: true,
        httpOnly: true,
    });
}