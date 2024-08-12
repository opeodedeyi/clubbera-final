'use server';

import { A_COOKIE_NAME } from "@/constants";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;


async function fetchMeetingData(endpoint, timeout) {
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
            throw new Error('Failed to fetch group list');
        }

        const data = await response.json();
        
        return data.success 
            ? { success: true, meetings: data.meetings, pagination: data.pagination }
            : { success: false, error: "Failed to fetch group list" };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function getGroupMeetings(uniqueURL, currentPage, upcoming=null, limit=12) {
    return fetchMeetingData(`/group/${uniqueURL}/meetings?upcoming=${upcoming}&limit=${limit}&page=${currentPage}`, 10000);
}
