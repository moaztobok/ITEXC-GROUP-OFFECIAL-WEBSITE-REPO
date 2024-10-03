import ProductSection from "@/components/shared/ProductsSection";
import { BrandingServices } from "@/data/data";

const StudioServices = () => {
  return (
    <ProductSection
      title="Our Studio Services"
      label="Transform your business"
      data={BrandingServices}
    />
  );
};

export default StudioServices;
