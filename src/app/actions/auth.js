'use server';

import { A_COOKIE_NAME } from "@/constants";
import { cookies } from 'next/headers';
import NodeCache from 'node-cache';


const cache = new NodeCache({ stdTTL: 60 * 30, checkperiod: 60 * 10 });

export async function logout() {
    const token = cookies().get(A_COOKIE_NAME)?.value;

    cookies().delete(A_COOKIE_NAME);

    if (token) {
        try {
            cache.del(token);
        } catch (error) {
            console.error('Error clearing Redis cache:', error);
        }
    }
}