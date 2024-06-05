import {NextRequest, NextResponse} from 'next/server';


export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    console.log('middleware', pathname)

    if (request.nextUrl.pathname.startsWith("/_next") || request.nextUrl.pathname.startsWith("/favicon")) {
        return NextResponse.next();
    }

    if (!request.cookies.has('auth-token') && pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}
