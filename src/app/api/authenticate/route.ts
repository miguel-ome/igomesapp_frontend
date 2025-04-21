import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookiesStorage = cookies();
  const token = (await cookiesStorage).get("access_token")?.value;

  if (!token) {
    return NextResponse.json({ authenticated: false, status: 401 });
  }

  return NextResponse.json({ authenticated: true, status: 200 });
}
