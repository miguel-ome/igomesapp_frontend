import { Sidebar } from "@/components/Sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  const cookieStore = cookies() // ✅ cookies() retorna objeto
  const token = (await cookieStore).get('access_token')?.value

  if (!token) {
    // Redireciona caso o token não seja encontrado
    redirect('login')
  }

  return (
    <div className="flex flex-col md:flex-row"><Sidebar />{children}</div>
  );
}













