import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Infinite Sports | Youth Sports Academy",
  description:
    "Youth volleyball, basketball, and core training built around strong fundamentals, confidence, and long-term growth.",
  openGraph: {
    title: "Infinite Sports | Build the Athlete Within",
    description:
      "Youth volleyball, basketball, and core training built for confidence and long-term growth.",
    images: [{ url: "/og.png", width: 1744, height: 907 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Sports | Build the Athlete Within",
    description:
      "Youth volleyball, basketball, and core training built for confidence and long-term growth.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
