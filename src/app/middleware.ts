import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const url = request.nextUrl;

  // Se tentar acessar /login e já tiver token → redireciona pro dashboard
  if (url.pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Se tentar acessar rota protegida e NÃO tiver token → redireciona pro login
  const privateRoutes = ["/dashboard", "/profile"];
  const isPrivate = privateRoutes.some((route) =>
    url.pathname.startsWith(route)
  );

  if (isPrivate && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
