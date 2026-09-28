import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // Authentication is owned by the backend API.
  // The API route proxy forwards the host-scoped session cookie to the
  // backend; the backend independently authorizes protected operations.

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
