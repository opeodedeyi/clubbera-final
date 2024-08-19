'use server';

import { A_COOKIE_NAME } from "@/constants";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;


async function postDiscussions(endpoint, comment, timeout) {
    const cookieStore = cookies();
    const token = cookieStore.get(A_COOKIE_NAME)?.value;

    try {
        const response = await fetchWithTimeout(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                comment: comment
            }),
        }, timeout);

        if (!response.ok) {
            throw new Error('Failed to fetch group list');
        }

        const data = await response.json();

        console.log(data);
        
        return data.success 
            ? { success: true, discussion: data.discussion }
            : { success: false, error: "Failed to fetch group list" };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function postGroupDiscussion(uniqueURL, comment) {
    return postDiscussions(`/discussion/${uniqueURL}/group`, comment, 10000);
}

export async function postMeetingDiscussion(uniqueURL, comment) {
    return postDiscussions(`/discussion/${uniqueURL}/meeting`, comment, 10000);
}

export async function postReply(id, comment) {
    return postDiscussions(`/discussion/${id}/reply`, comment, 10000);
}