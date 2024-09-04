import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib';
import { A_COOKIE_NAME } from "@/constants";
 

export async function middleware(request) {
    const { pathname, searchParams } = request.nextUrl;
    const token = request.cookies.get(A_COOKIE_NAME)?.value || '';
    const isAuth = Boolean(token);
    
    let response = NextResponse.next();

    const publicPaths = ['/', '/login', '/signup', '/forgotpassword'];
    const privatePaths = [
        '/dashboard', 
        '/profile', 
        '/creategroup',
    ];

    const privateGroupSubpaths = ['edit', 'members', 'discussions'];

    const isPublicPath = publicPaths.includes(pathname);
    const isPrivatePath = privatePaths.some(path => pathname.startsWith(path));

    const isPrivateGroupPath = pathname.startsWith('/group/') && 
        privateGroupSubpaths.some(subpath => pathname.includes(`/${subpath}`));

    if (isAuth) {
        try {
            await verifyToken(request);
        } catch (error) {
            request.cookies.delete(A_COOKIE_NAME);
            response.cookies.delete(A_COOKIE_NAME);
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    if (isPublicPath && isAuth) {
        const nextPageURL = searchParams.get('destination') || '/dashboard';
        return NextResponse.redirect(new URL(nextPageURL, request.nextUrl));
    }

    if ((isPrivatePath || isPrivateGroupPath) && !isAuth) {
        const redirectUrl = new URL('/login', request.nextUrl);
        redirectUrl.searchParams.set('destination', pathname);
        return NextResponse.redirect(redirectUrl);
    }

    return response;
}
 
export const config = {
    matcher: [
        '/',
        '/dashboard',
        '/profile',
        '/login',
        '/signup',
        '/forgotpassword',
        '/creategroup',
        '/group/:uniqueURL/edit',
        '/group/:uniqueURL/members', 
        '/group/:uniqueURL/discussions'
    ],
}
