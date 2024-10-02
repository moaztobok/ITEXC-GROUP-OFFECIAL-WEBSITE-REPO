import React from "react";
import HeroSection from "./_components/HeroSection";
import SectionWrapper from "@/components/shared/SectionWrapper";

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SectionWrapper></SectionWrapper>
    </main>
  );
};

export default page;
