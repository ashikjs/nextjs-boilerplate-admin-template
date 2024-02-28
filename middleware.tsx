import {NextRequest, NextResponse} from 'next/server';

export function middleware(req: NextRequest) {
    // const token = req.cookies.get('token');
    const token = req.cookies;

    // Validate token
    const isValid: boolean = validateToken(token); // Assume validateToken is a function that validates the token.
    console.log('validateToken:: ', token);

    if (!isValid && req.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

function validateToken(token: any) {
    return false;
}