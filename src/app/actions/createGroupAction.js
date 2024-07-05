'use server'

import { cookies } from 'next/headers';
import { A_COOKIE_NAME } from "@/constants";


export async function createGroup(data) {
    const cookieStore = cookies();
    const token = cookieStore.get(A_COOKIE_NAME)?.value;

    try {
        const response = await fetch(`${process.env.API_URL}/group/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                city: data.cityLocation,
                lat: data.latLocation,
                lng: data.lngLocation,
                title: data.groupTitle,
                description: data.groupDescription,
                topics: data.selectedTopics,
                is_private: data.isPrivate,
                banner: data.selectedImage,
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