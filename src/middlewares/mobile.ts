import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest): NextResponse {
  const userAgent = request.headers.get('User-Agent');

  if (userAgent && /(Android|iPhone)/i.test(userAgent)) {
    return NextResponse.rewrite(new URL('/mobile', request.url), {
      request
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/blogs', '/repositories', '/bots', '/music', '/friends']
};
