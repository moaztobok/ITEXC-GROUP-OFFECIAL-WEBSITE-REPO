import ProductSection from "@/components/shared/ProductsSection";
import { HrServices } from "@/data/data";
import React from "react";

const HrQuote = () => {
  return (
    <ProductSection
      title="Mobile solutions"
      label="Elevate your business"
      data={HrServices}
    />
  );
};

export default HrQuote;
