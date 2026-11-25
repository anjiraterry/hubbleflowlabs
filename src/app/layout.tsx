import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121212",
};

export const metadata: Metadata = {
  title: "HubbleFlow Labs — Envision the Future",
  description:
    "HubbleFlow Labs is a multidisciplinary technology company, venture studio, and research laboratory engineering intelligent systems and independent ventures.",
  keywords: [
    "HubbleFlow Labs",
    "artificial intelligence",
    "software engineering",
    "fintech systems",
    "venture studio",
    "research and development",
    "Kiyo Stores",
    "Boardscape",
    "Kashy",
    "SocialHouse",
  ],
  authors: [{ name: "HubbleFlow Labs" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
