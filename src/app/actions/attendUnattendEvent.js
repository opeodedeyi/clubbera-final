'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { A_COOKIE_NAME } from '@/constants'
import { fetchWithTimeout } from '@/utils/fetchWithTimeout'

const API_URL = process.env.API_URL

const handleEventAction = async (action, uniqueURL, currentPageURL) => {
    const token = cookies().get(A_COOKIE_NAME)?.value

    if (!token) {
        const encodedDestination = encodeURIComponent(currentPageURL)
        redirect(`/login?destination=${encodedDestination}`)
    }

    try {
        const response = await fetchWithTimeout(`${API_URL}/meetingaction/${uniqueURL}/${action}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            }, 5000)

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.message || `Failed to ${action} group`)
        }

        const { status } = await response.json()
        revalidatePath(`/meeting/${uniqueURL}`)

        return { success: true, status }
    } catch (error) {
        console.error(`Error ${action}ing group:`, error)
        return { success: false, error: error.message }
    }
}

export const attendEvent = (uniqueURL, currentPageURL) => 
    handleEventAction('attend', uniqueURL, currentPageURL)

export const unattendEvent = (uniqueURL, currentPageURL) => 
    handleEventAction('unattend', uniqueURL, currentPageURL)