import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "НовоТех - Платёжный модуль для сайтов и платформ",
  description:
    "НовоТех - платёжный модуль для сайтов и платформ, которым нужно не просто принимать оплату, а управлять логикой сделки. Безопасная сделка, разделение платежей между участниками, API интеграция.",
  keywords: "платёжный модуль, безопасная сделка, разделение платежей, НовоТех",
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
