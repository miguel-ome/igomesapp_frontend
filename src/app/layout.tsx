import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const fontPrimary = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Distribuidora",
  description:
    "Este é um sistema extendido do sistema principal da Distribuidora Paraibana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${fontPrimary.className}`}>{children}</body>
    </html>
  );
}

