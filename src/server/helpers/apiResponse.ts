import { NextResponse } from "next/server";

export function successResponse(message: string) {
  return NextResponse.json({ success: true, message });
}

export function errorResponse(message: string, status: number) {
  return NextResponse.json({ success: false, message }, { status });
}
