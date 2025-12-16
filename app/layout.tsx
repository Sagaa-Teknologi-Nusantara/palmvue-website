import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for technical/clean look
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PalmVue | Seed Production Infrastructure",
  description: "End-to-end traceability and compliance for palm seed production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
