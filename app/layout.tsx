import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Yessine Bouajila - Portfolio",
  description: "Full-Stack Developer & Product Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white font-sans`}
      >
        <Navigation />
        <main className="min-h-dvh max-w-3xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
