import React from "react";
import HeroSection from "./_components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITEXC Studio",
  description:
    "Craft impactful digital experiences and branding that resonate with your audience and elevate your brand identity."
};

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
    </main>
  );
};

export default page;
