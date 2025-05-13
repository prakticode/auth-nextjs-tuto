import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { decrypt } from "./lib/auth";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login"];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (isPublicRoute && session?.userId) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
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
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}