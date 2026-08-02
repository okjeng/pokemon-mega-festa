import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "2026 부산 메가페스타 정보";
const SITE_DESCRIPTION =
  "2026년 여름 부산 느긋느긋 바캉스(포켓몬 메가페스타) 일정, 지도, 지하철 접근, 스탬프랠리, 팝업스토어, 굿즈, 포토존, 먹거리, 화장실, 주차, FAQ까지 한눈에 확인하는 비공식 팬 정보 허브.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | 행사 정보`, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white text-black antialiased">
        <Header />
        <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
