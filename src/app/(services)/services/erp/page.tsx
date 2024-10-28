import React from "react";
import HeroSection from "./_components/HeroSection";
import Erp from "./_components/ERP";
import Benifits from "./_components/Benifits";
import ErpIntegration from "./_components/ErpIntegration";
import OdooPartner from "./_components/OdooPartner";
import ErpQuote from "./_components/ErpQuote";
import ErpProcess from "./_components/ErpProcess";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITEXC Group | Erp Solutions",
  description:
    "Transform your business processes with ITEXC Group's ERP solutions, designed to integrate seamlessly and enhance your operational capabilities."
};

const page = () => {
  return (
    <main className="min-h-screen selection:bg-primary-erp">
      <HeroSection />
      <Erp />
      <Benifits />
      <ErpIntegration />
      <OdooPartner />
      <ErpQuote />
      <ErpProcess />
    </main>
  );
};

export default page;
