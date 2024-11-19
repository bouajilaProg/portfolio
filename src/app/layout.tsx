import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bouajilaProg",
  description: "bouajilaProg's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-gray-900 scroll-smooth" lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
