import ProductSection from "@/components/shared/ProductsSection";
import { BrandingServices } from "@/data/data";

const StudioServices = () => {
  return (
    <ProductSection
      team_id={6}
      title="Our Studio Services"
      label="Transform your business"
      data={BrandingServices}
    />
  );
};

export default StudioServices;
