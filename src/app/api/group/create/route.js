import { A_COOKIE_NAME } from "@/constants";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";

export async function POST(request) {
    const passedData = await request.json();
    const cookieStore = cookies();
    const token = cookieStore.get(A_COOKIE_NAME)?.value;

    try {
        const response = await fetchWithTimeout(`${process.env.API_URL}/group/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                city: passedData.cityLocation,
                lat: passedData.latLocation,
                lng: passedData.lngLocation,
                title: passedData.groupTitle,
                description: passedData.groupDescription,
                topics: passedData.selectedTopics,
                is_private: passedData.isPrivate,
                banner: passedData.selectedImage,
            }),
        }, 5000);

        console.log("Status Code:", response.status);
        const responseBody = await response.text(); // Use .text() to avoid JSON parse error
        console.log("Response Body:", responseBody);
    
        if (response.ok) {
            const data = JSON.parse(responseBody); // Parse JSON only after confirming response is OK
            return NextResponse.json({ data });
        }
        
        return NextResponse.json({ error: data.message });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}