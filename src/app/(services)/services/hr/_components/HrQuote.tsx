import ProductSection from "@/components/shared/ProductsSection";
import { HrServices } from "@/data/data";
import React from "react";

const HrQuote = () => {
  return (
    <ProductSection
      title="How can we help you"
      label="Empower your workforce"
      data={HrServices}
    />
  );
};

export default HrQuote;
