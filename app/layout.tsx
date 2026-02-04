import type { Metadata } from "next";
import VercelAnalyticsWrapper from "../components/VercelAnalytics";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
    icon: "infinity.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

        {/* Vercel Analytics */}
        <VercelAnalyticsWrapper />
      </body>
    </html>
  );
}
