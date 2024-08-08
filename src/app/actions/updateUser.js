'use server';

import { A_COOKIE_NAME } from "@/constants";
import { cookies } from "next/headers";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import { revalidatePath } from "next/cache";
import { clearUserCache } from "./getUserData";


async function updateUserData(path, newData, updateType) {
    const cookieStore = cookies();
    const token = cookieStore.get(A_COOKIE_NAME)?.value;

    if (!token) {
        throw new Error("Authentication token is missing");
    }

    console.log('api url', process.env.API_URL);
    

    try {
        const response = await fetchWithTimeout(`${process.env.API_URL}/user/${path}`, {
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
        
        // if (token) {
        //     await clearUserCache(token);
        // }

        if (updateType !== 'password') {
            revalidatePath(`/profile`);
        }

        return data;
    } catch (error) {
        console.error(`Error updating user ${updateType}:`, error);
        throw error;
    }
}

export async function updateUser(newData) {
    const updateData = {
        fullName: newData.fullName,
        bio: newData.bio,
        gender: newData.gender,
        birthday: newData.birthday,
        city: newData.city,
        lat: newData.lat,
        lng: newData.lng
    };
    return updateUserData('update', updateData, 'details');
}

export async function updateUserImage(newData) {
    const updateData = {
        avatar: newData.avatar
    };
    return updateUserData('updateavatar', updateData, 'image');
}

export async function changePassword(newData) {
    const updateData = {
        oldPassword: newData.oldPassword,
        newPassword: newData.newPassword
    };
    return updateUserData('changepassword', updateData, 'password');
}