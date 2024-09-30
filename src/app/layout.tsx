import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";

import LenisScroll from "@/components/home/LenisScroll";
import Contact from "@/components/shared/Contact";
import SubFooter from "@/components/shared/Footer";

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
        <SubFooter />
      </body>
    </html>
  );
}
