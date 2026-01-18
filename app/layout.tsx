import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PalmVue | Seed Production Infrastructure",
  description:
    "End-to-end traceability and compliance for palm seed production.",
  icons: {
    icon: "/tosca-icon.png",
    apple: "/tosca-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-slate-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
