import React from "react";
import HeroSection from "./_components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITEXC HR Management",
  description:
    "Optimize workforce management with tailored solutions that empower your employees and drive organizational efficiency."
};

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
    </main>
  );
};

export default page;
