'use server';

import { A_COOKIE_NAME } from "@/constants";
import { cookies } from "next/headers";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import { revalidatePath } from "next/cache";


async function updateMeetingData(uniqueURL, newData, updateType) {
    const cookieStore = cookies();
    const token = cookieStore.get(A_COOKIE_NAME)?.value;

    if (!token) {
        throw new Error("Authentication token is missing");
    }

    try {
        const response = await fetchWithTimeout(`${process.env.API_URL}/meeting/${uniqueURL}/${updateType}`, {
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

        revalidatePath(`/meeting/${uniqueURL}`);

        return data;
    } catch (error) {
        console.error(`Error updating group ${updateType}:`, error);
        throw error;
    }
}

export async function updateMeeting(uniqueURL, newData) {
    const updateData = {
        title: newData.title,
        description: newData.description,
        date_of_meeting: newData.date_of_meeting,
        time_of_meeting: newData.time_of_meeting,
        duration: newData.duration,
        capacity: newData.capacity,
        location: newData.location,
        location_details: newData.location_details,
        lat: newData.lat,
        lng: newData.lng
    };
    return updateMeetingData(uniqueURL, updateData, 'update');
}

export async function updateMeetingImage(uniqueURL, newData) {
    const updateData = {
        banner: newData.banner
    };
    return updateMeetingData(uniqueURL, updateData, 'updatebanner');
}