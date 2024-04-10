// import { A_COOKIE_NAME } from "@/constants";
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";
// import { fetchWithTimeout } from "@/utils/fetchWithTimeout";

// export async function GET() {
//     const cookieStore = cookies();
//     const token = cookieStore.get(A_COOKIE_NAME)?.value;
//     const API_URL = process.env.API_URL

//     console.log("a cookie name", A_COOKIE_NAME);

//     console.log('token', token);
//     console.log('API_URL', API_URL);
//     try {
//         const response = await fetchWithTimeout(`${API_URL}/user/auth/me`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': token
//             },
//         }, 3000);
    
//         const data = await response.json();
    
//         if (data.success) {
//             console.log(data);

//             return NextResponse.json({ data });
//         }
        
//         cookieStore.set({name: A_COOKIE_NAME, value: '', maxAge: 0});
//         return NextResponse.json({ error: data.message });
//     } catch (error) {
//         cookieStore.set({name: A_COOKIE_NAME, value: '', maxAge: 0});
//         return NextResponse.json({ error: error.message });
//     }
// }

// export async function POST() {
//     const cookieStore = cookies();
//     const token = cookieStore.get(A_COOKIE_NAME)?.value;
//     const API_URL = process.env.API_URL

//     console.log('token', token);
//     console.log(A_COOKIE_NAME);

//     cookieStore.set({name: A_COOKIE_NAME, value: '', maxAge: 0});
//     return NextResponse.json({ message: 'logged out user' });
// }