'use server'

import { cookies } from 'next/headers';
import { A_COOKIE_NAME } from "@/constants";


export async function createMeeting(groupUniqueUrl, data) {
    const cookieStore = cookies();
    const token = cookieStore.get(A_COOKIE_NAME)?.value;
    
    try {
        const response = await fetch(`${process.env.API_URL}/meeting/${groupUniqueUrl}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                title: data.title,
                description: data.description,
                date_of_meeting: data.date_of_meeting,
                time_of_meeting: data.time_of_meeting,
                duration: data.duration,
                capacity: data.capacity,
                banner: data.banner,
                location: data.location,
                lat: data.lat,
                lng: data.lng,
                location_details: data.location_details
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to create group');
        }

        const result = await response.json();
        
        return { data: result };
    } catch (error) {
        return { error: error.message };
    }
}