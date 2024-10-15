import Founder from "@/components/about/Founder";
import HeroSection from "@/components/about/HeroSection";
import KeyFacts from "@/components/about/KeyFacts";
import Office from "@/components/about/Office";
import React from "react";

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
