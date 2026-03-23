import type { Metadata } from "next";
import { Zen_Maru_Gothic, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.nameJa}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🦋</text></svg>",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.nameJa}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent("Attraction Magnifier")}&subtitle=${encodeURIComponent("恋が動き出す、わたしのアップデート")}`,
        width: 1200,
        height: 630,
        alt: "Attraction Magnifier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.nameJa}`,
    description: siteConfig.description,
    images: [`/api/og?title=${encodeURIComponent("Attraction Magnifier")}&subtitle=${encodeURIComponent("恋が動き出す、わたしのアップデート")}`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${zenMaru.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-zen)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
