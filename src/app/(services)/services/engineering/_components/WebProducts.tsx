import ProductSection from "@/components/shared/ProductsSection";
import { WebDevProducts } from "@/data/data";

const WebProducts = () => {
  return (
    <ProductSection
      team_id={7}
      title="Web development for businesses"
      label="Elevate your business"
      data={WebDevProducts}
    />
  );
};

export default WebProducts;
