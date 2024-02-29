import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// @utils
import {isAuthenticated} from "@/lib/utils/auth";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log('Pathname:: ', pathname)

    if (!pathname.startsWith('/dashboard') && isAuthenticated(request.cookies)) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (!isAuthenticated(request.cookies) && !pathname.startsWith('/login')) {
        return Response.redirect(new URL('/login', request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - .png (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|.*\\.png$).*)'
    ]
}
