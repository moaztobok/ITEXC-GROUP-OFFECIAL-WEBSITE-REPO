import ProductSection from "@/components/shared/ProductsSection";
import { MobileDevProducts } from "@/data/data";
import React from "react";

const MobileProducts = () => {
  return (
    <ProductSection
      title="Mobile solutions"
      label="Elevate your business"
      data={MobileDevProducts}
    />
  );
};

export default MobileProducts;
