// app/api/logout/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookiesStorage = await cookies();
  cookiesStorage.set("access_token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  return NextResponse.json({ logout: true });
}
