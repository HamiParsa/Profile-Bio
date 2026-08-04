import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

// Google Fonts with proper fallback
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["sans-serif"],
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  fallback: ["sans-serif"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Hami Parsa",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={bricolage.className}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Loader />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}