import React from "react";
import HeroSection from "./_components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITEXC ERP Solutions",
  description:
    "Streamline and enhance core operations with customized ERP solutions tailored to your business needs."
};

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
    </main>
  );
};

export default page;
