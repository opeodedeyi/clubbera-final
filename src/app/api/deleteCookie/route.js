import { cookies } from 'next/headers';


export async function POST(request) {
    const nextCookies = cookies();
    console.log('nextCookies', nextCookies.get('auth_token'));
    // cookieStore.set('auth_token', '', { expires: 0 });

    return new Response('Cookie deleted', { status: 200 });
}