import { A_COOKIE_NAME } from "@/constants";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";

export async function PATCH(request, params) {
    const passedData = await request.json();
    const cookieStore = cookies();
    const token = cookieStore.get(A_COOKIE_NAME)?.value;

    try {
        const response = await fetchWithTimeout(`${process.env.API_URL}/group/${params.params.uniqueURL}/update`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                title: passedData.groupTitle,
                description: passedData.groupDescription,
                tagline: passedData.groupTagline,
                is_private: passedData.boolValue,
                topics: passedData.selectedTopics,
                city: passedData.cityLocation,
                lat: passedData.latLocation,
                lng: passedData.lngLocation,
            }),
        }, 3000);
    
        const data = await response.json();
    
        if (data.success) {
            return NextResponse.json({ data });
        }
        
        return NextResponse.json({ error: data.message });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}