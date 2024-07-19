'use server'

import { cookies } from 'next/headers';
import { A_COOKIE_NAME } from '@/constants';
import { fetchWithTimeout } from '@/utils/fetchWithTimeout';

const API_URL = process.env.API_URL

const getHeaders = () => {
    const token = cookies().get(A_COOKIE_NAME)?.value
    return {
        'Content-Type': 'application/json',
        'Authorization': token
    }
}

async function handleResponse(response, errorMessage) {
    if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || errorMessage)
    }
    return response.json()
}

async function apiCall(url, method = 'GET') {
    const response = await fetchWithTimeout(url, {
        method,
        headers: getHeaders(),
    }, 5000)
    return handleResponse(response, `Failed to ${method.toLowerCase()} ${url}`)
}

export async function fetchUsers(uniqueURL) {
    try {
        const data = await apiCall(`${API_URL}/group/${uniqueURL}/members`)
        return data.members
    } catch (error) {
        console.error('Error fetching users:', error)
        throw error
    }
}