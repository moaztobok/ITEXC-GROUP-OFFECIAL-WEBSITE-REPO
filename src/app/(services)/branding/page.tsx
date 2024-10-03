import React from "react";
import HeroSection from "./_components/HeroSection";
import Brand from "./_components/Brand";
import DigitalProducts from "./_components/MarketingDesign";
import MaterialDesign from "./_components/Branding";
import ProductDesign from "./_components/ProductDesign";
import StudioProcess from "./_components/StudioProcess";
import StudioServices from "./_components/StudioServices";

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Brand />
      <MaterialDesign />
      <ProductDesign />
      <DigitalProducts />
      <StudioServices />
      <StudioProcess />
    </main>
  );
};

export default page;
