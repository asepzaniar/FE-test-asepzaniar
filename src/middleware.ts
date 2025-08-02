import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    
  const isLoggedIn = request.cookies.get('isLoggedIn')?.value;
  console.log('isLoggedIn:', isLoggedIn);

  const protectedPaths = ['/product', '/landing', '/profile']
  const path = request.nextUrl.pathname

  if (protectedPaths.includes(path) && isLoggedIn !== 'true') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
 
export const config = {
  matcher: ['/landing', '/landing/:path*', '/product', '/product/:path*', '/profile', '/profile/:path*'],
};
