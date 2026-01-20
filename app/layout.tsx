import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mohamed Yessine Bouajila - Portfolio",
  description: "Full-Stack Developer & Product Manager",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white font-sans`}
      >
        <main className="min-h-dvh max-w-3xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
