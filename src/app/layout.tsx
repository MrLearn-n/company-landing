import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "НовоТех — Цифровые платёжные решения",
  description:
    "НовоТех предоставляет надёжные и безопасные решения для приёма и обработки онлайн-платежей для бизнеса любого масштаба.",
  keywords: "платёжная система, онлайн платежи, финтех, НовоТех",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
