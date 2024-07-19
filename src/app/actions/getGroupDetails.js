'use server';

import { A_COOKIE_NAME } from "@/constants";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;


async function fetchGroupData(endpoint, timeout) {
    const cookieStore = cookies();
    const token = cookieStore.get(A_COOKIE_NAME)?.value;

    try {
        const response = await fetchWithTimeout(`${API_URL}${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        }, timeout);

        if (!response.ok) {
            throw new Error('Failed to fetch group details');
        }

        const data = await response.json();
        
        return data.success 
            ? { success: true, group: data.group }
            : { success: false, error: data.message };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function getGroupDetailsEdit(groupUniqueURL) {
    return fetchGroupData(`/group/${groupUniqueURL}/edit`, 3000);
}

export async function getGroupDetails(groupUniqueURL) {
    return fetchGroupData(`/group/${groupUniqueURL}`, 5000);
}