import React from "react";
import HeroSection from "./_components/HeroSection";
import Erp from "./_components/ERP";
import Benifits from "./_components/Benifits";
import ErpIntegration from "./_components/ErpIntegration";
import OdooPartner from "./_components/OdooPartner";
import ErpQuote from "./_components/ErpQuote";
import ErpProcess from "./_components/ErpProcess";

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
