import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest): NextResponse {
  return NextResponse.rewrite(new URL('/api/rss', request.url), {
    request
  });
}

export const config = {
  matcher: '/rss.xml'
};
