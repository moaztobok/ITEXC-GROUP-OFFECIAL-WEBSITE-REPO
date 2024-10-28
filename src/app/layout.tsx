import Navigation from "@/components/navigation/navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

import Contact from "@/components/shared/Contact";
import SubFooter from "@/components/shared/Footer";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers/Providers";

import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITEXC Group | Integrated Business Solutions Company",
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
      <body className={cn(inter.className, "font-medium text-lg")}>
        <Toaster />
        <Providers>
          <Navigation />
          {children}
          <Contact />
          <SubFooter />
        </Providers>
      </body>
    </html>
  );
}
