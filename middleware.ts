import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// No authentication for local deployment
// This middleware is kept for future extensibility
export function middleware(request: NextRequest) {
  // Allow all requests - configured for local usage
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};