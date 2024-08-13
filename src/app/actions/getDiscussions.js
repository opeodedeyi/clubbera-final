'use server';

import { A_COOKIE_NAME } from "@/constants";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;


async function fetchDiscussions(endpoint, timeout) {
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
            ? { success: true, discussions: data.discussions, pagination: data.pagination }
            : { success: false, error: "Failed to fetch group list" };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function getGroupDiscussions(uniqueURL, page, limit=12) {
    return fetchDiscussions(`/discussion/${uniqueURL}/group?limit=${limit}&page=${page}`, 10000);
}

export async function getMeetingDiscussions(uniqueURL, page, limit=12) {
    return fetchDiscussions(`/discussion/${uniqueURL}/meeting?limit=${limit}&page=${page}`, 10000);
}

export async function getReplies (id, page, limit=5) {
    return fetchDiscussions(`/discussion/${id}/replies?limit=${limit}&page=${page}`, 10000);
}
