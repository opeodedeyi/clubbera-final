import { NextResponse } from 'next/server';
import { verifyUser } from '@/lib';
import { A_COOKIE_NAME, B_COOKIE_NAME } from "@/constants";
 

export async function middleware(request) {
    const data = await verifyUser(request);

    let response = NextResponse.next();
    const { pathname, searchParams } = request.nextUrl
    const previousPageURL = pathname.startsWith('/') ? pathname.slice(1) : null;
    const nextPageURL = searchParams.get('destination') || '/dashboard';
    const isPublicPath = pathname === '/' || pathname === '/login' || pathname === '/signup' || pathname === '/forgotpassword';
    const isPrivatePath = pathname === '/dashboard' || pathname === '/creategroup' || pathname === '/group/:uniqueURL/edit';
    const token = request.cookies.get(A_COOKIE_NAME)?.value || '';
    let redirectUrl;

    if (token && !data.success) {
        request.cookies.delete(A_COOKIE_NAME);
        response.cookies.delete(A_COOKIE_NAME);
        response.cookies.delete(B_COOKIE_NAME);
    }

    if (data.success) {
        response.cookies.set(B_COOKIE_NAME, data.user);
    }

    const isAuth = request.cookies.has(A_COOKIE_NAME);

    if (isPublicPath && isAuth) {
        redirectUrl = new URL(nextPageURL, request.nextUrl);
        response = NextResponse.redirect(redirectUrl);
        response.cookies.set(B_COOKIE_NAME, data.user);
        return response;
    }

    if (isPrivatePath && !isAuth) {
        redirectUrl = new URL('/login', request.nextUrl);
        if (previousPageURL) {
            redirectUrl.searchParams.set('destination', previousPageURL);
        }
    }

    if (redirectUrl) {
        response = NextResponse.redirect(redirectUrl);
        response.cookies.delete(A_COOKIE_NAME);
        response.cookies.delete(B_COOKIE_NAME);
        return response;
    }

    return response;
}
 
export const config = {
    matcher: [
        '/',
        '/dashboard',
        '/login',
        '/signup',
        '/forgotpassword',
        '/creategroup',
        '/group/:uniqueURL/edit',
    ],
}
