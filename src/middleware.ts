import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Redirect paths with trailing slashes to their non-slashed counterparts
    if (pathname.endsWith("/") && pathname.length > 1) {
        const newPath = pathname.slice(0, -1);
        return NextResponse.redirect(new URL(newPath, request.url));
    }

    const requestHeaders = new Headers(request.headers);

    requestHeaders.set("x-pathname", pathname);

    // Add security headers
    requestHeaders.set("Content-Security-Policy", "frame-ancestors 'none'");
    requestHeaders.set("X-Content-Type-Options", "nosniff");
    requestHeaders.set("X-Frame-Options", "DENY");
    requestHeaders.set("X-XSS-Protection", "1; mode=block");

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - images/ (image files in public)
         * - icons/ (icon files in public)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|images/|icons/).*)",
    ],
};
