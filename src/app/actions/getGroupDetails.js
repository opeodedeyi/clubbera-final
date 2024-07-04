'use server';

import { A_COOKIE_NAME } from "@/constants";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import { cookies } from "next/headers";


export async function getGroupDetailsEdit(groupUniqueURL) {
    const cookieStore = cookies();
    const token = cookieStore.get(A_COOKIE_NAME)?.value;
    const API_URL = process.env.API_URL

    try {
        const response = await fetchWithTimeout(`${API_URL}/group/${groupUniqueURL}/edit`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        }, 3000);

        if (!response.ok) {
            throw new Error('Failed to fetch group details');
        }

        const data = await response.json();
        
        if (data.success) {
            return { success: true, group: data.group };
        }

        return { success: false, error: data.message };
    } catch (error) {
        return { success: false, error: error.message };
    }
}