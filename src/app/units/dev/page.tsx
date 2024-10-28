import React from "react";
import HeroSection from "./_components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITEXC Engineering",
  description:
    "Harness engineering excellence to create innovative IT solutions that drive business success."
};

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
    </main>
  );
};

export default page;
