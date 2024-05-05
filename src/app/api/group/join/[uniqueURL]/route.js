import { A_COOKIE_NAME } from "@/constants";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";

// join a community
export async function POST(request, { params }) {
    const cookieStore = cookies();
    const token = cookieStore.get(A_COOKIE_NAME)?.value;

    try {
        const response = await fetchWithTimeout(`${process.env.API_URL}/group/${params.uniqueURL}/joingroup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
        }, 5000);

        console.log("Status Code:", response.status);
        const responseBody = await response.text();
        console.log("Response Body:", responseBody);
    
        if (response.ok) {
            const data = JSON.parse(responseBody);
            return NextResponse.json({ data });
        }
        
        return NextResponse.json({ error: data.message });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}