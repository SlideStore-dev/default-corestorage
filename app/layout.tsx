import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
// 1. Import your Footer component
import Footer from "@/components/Footer"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CORE STORAGE",
  description: "Storage that understands your data",
  icons: {
    icon: "favicon.svg"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        
        {/* Wrap children in a div with min-height to ensure 
            the footer stays at the bottom on short pages */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* 2. Place the Footer here */}
        <Footer />
      </body>
    </html>
  );
}