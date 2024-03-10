import { A_COOKIE_NAME } from "@/constants";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { fetchWithTimeout } from "@/utils/fetchWithTimeout";

export async function POST(request) {
    const passedData = await request.json();

    try {
        const response = await fetchWithTimeout(`${process.env.API_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: passedData.email,
                password: passedData.password,
            }),
        }, 5000); // 5 seconds timeout
    
        const data = await response.json();
    
        if (data.success) {
            const cookieStore = cookies()
            cookieStore.set({ 
                name: A_COOKIE_NAME, 
                value: data.token, 
                path: '/',
                maxAge: 60 * 60 * 24 * 60,
                sameSite: 'lax',
                secure: true,
                httpOnly: true,
            });

            return NextResponse.json({ data });
        }
        
        return NextResponse.json({ error: data.message });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}