import React from "react";
import HeroSection from "./_components/HeroSection";
import Brand from "./_components/Brand";
import DigitalProducts from "./_components/MarketingDesign";
import MaterialDesign from "./_components/Branding";
import ProductDesign from "./_components/ProductDesign";
import StudioProcess from "./_components/StudioProcess";
import StudioServices from "./_components/StudioServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITEXC Group | Branding & Design",
  description:
    "Our branding experts at ITEXC Group create transformative identities that capture the essence of your brand and drive recognition."
};

const page = () => {
  return (
    <main className="min-h-screen selection:bg-primary-studio">
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
