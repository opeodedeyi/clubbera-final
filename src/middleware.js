import { NextResponse } from 'next/server'
 

export function middleware(request) {
    const { pathname, searchParams } = request.nextUrl
    const previousPageURL = pathname.startsWith('/') ? pathname.slice(1) : null;
    const nextPageURL = searchParams.get('destination') || '/';

    const isPublicPath = pathname === '/login'  || pathname === '/signup' || pathname === '/forgotpassword'

    const token = request.cookies.get('auth_token')?.value || ''

    if (isPublicPath && token) {
        return NextResponse.redirect( new URL(nextPageURL, request.nextUrl) )
    }

    if (!isPublicPath && !token) {
        const loginUrl = new URL('/login', request.nextUrl);
        if (previousPageURL) {
            loginUrl.searchParams.set('destination', previousPageURL);
        }
        return NextResponse.redirect(loginUrl)
    }

    // if (!isPublicPath && token) {
    //     return NextResponse.next()
    // }
}
 
export const config = {
    matcher: [
        '/login',
        '/signup',
        '/forgotpassword',
        '/creategroup',
        '/group/:uniqueURL/edit',
    ],
}
