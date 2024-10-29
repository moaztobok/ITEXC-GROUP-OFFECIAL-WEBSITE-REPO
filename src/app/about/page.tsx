import Founder from "@/components/about/Founder";
import HeroSection from "@/components/about/HeroSection";
import KeyFacts from "@/components/about/KeyFacts";
import Office from "@/components/about/Office";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITEXC Group | About Us",
  description:
    "Learn about ITEXC Group, a team of experts committed to delivering cutting-edge solutions that propel businesses forward."
};

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <KeyFacts />
      <Founder />
      <Office />
    </main>
  );
};

export default page;
