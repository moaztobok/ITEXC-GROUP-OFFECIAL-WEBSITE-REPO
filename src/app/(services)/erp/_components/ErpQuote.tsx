import ProductSection from "@/components/shared/ProductsSection";
import { ErpProducts } from "@/data/data";
import React from "react";

const ErpQuote = () => {
  return (
    <ProductSection
      title="Start Erp Integration for your Business"
      label="Streamline your business"
      data={ErpProducts}
    />
  );
};

export default ErpQuote;
