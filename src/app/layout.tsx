import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import LenisScroll from "@/components/home/Components/LenisScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITEXC GROUP",
  description:
    "ITEXC GROUP is a digital transformation company that provides innovative solutions to businesses."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LenisScroll />
        <Navigation />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
