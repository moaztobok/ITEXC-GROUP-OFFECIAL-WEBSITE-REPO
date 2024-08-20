import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Contact from "@/components/home/Contact";
import SubFooter from "@/components/home/SubFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Itexc group",
  description:
    "ITEXC GROUP is a software development company that provides innovative solutions to businesses."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Contact />
        <SubFooter />
      </body>
    </html>
  );
}
