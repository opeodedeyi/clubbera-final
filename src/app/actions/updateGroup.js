'use server';

import { A_COOKIE_NAME } from "@/constants";
import { cookies } from "next/headers";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import { revalidatePath } from "next/cache";


async function updateGroupData(uniqueURL, newData, updateType) {
    const cookieStore = cookies();
    const token = cookieStore.get(A_COOKIE_NAME)?.value;

    if (!token) {
        throw new Error("Authentication token is missing");
    }

    try {
        const response = await fetchWithTimeout(`${process.env.API_URL}/group/${uniqueURL}/update`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(newData),
        }, 5000);

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Server responded with an error:', response.status, errorData);
            throw new Error(errorData.message || `Server responded with status ${response.status}`);
        }

        const data = await response.json();

        revalidatePath(`/group/${uniqueURL}`);
        revalidatePath(`/group/${uniqueURL}/edit`);

        return data;
    } catch (error) {
        console.error(`Error updating group ${updateType}:`, error);
        throw error;
    }
}

export async function updateGroup(uniqueURL, newData) {
    const updateData = {
        title: newData.title,
        description: newData.description,
        tagline: newData.tagline,
        is_private: newData.is_private,
        topics: newData.topics,
        city: newData.location,
        lat: newData.lat,
        lng: newData.lng
    };
    return updateGroupData(uniqueURL, updateData, 'details');
}

export async function updateGroupImage(uniqueURL, newData) {
    const updateData = {
        banner: newData.banner
    };
    return updateGroupData(uniqueURL, updateData, 'image');
}