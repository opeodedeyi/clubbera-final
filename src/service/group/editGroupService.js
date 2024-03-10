'use server';

import { A_COOKIE_NAME } from "@/constants";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import { cookies } from "next/headers";


export async function getGroupEditDetails (groupUniqueURL) {
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
        }, 5000); // 5 seconds timeout
    
        const data = await response.json();
        console.log(data);
        
        if (data.success) {
            return data;
        }

        return { error: data.message };
    } catch (error) {
        return { error: error.message };
    }
}