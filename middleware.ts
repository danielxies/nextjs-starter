import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authenticated = request.cookies.get('authenticated')?.value === 'true';

  if (!authenticated && ['/dashboard'].some(path => request.nextUrl.pathname.startsWith(path))) {
    // Redirect to /holdon if unauthenticated
    return NextResponse.redirect(new URL('/holdon', request.url));
  } else if (authenticated && request.nextUrl.pathname === '/login') {
    // Redirect to dashboard if trying to access login while authenticated
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
