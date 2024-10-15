import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";

const ProductDesign = () => {
  return (
    <SectionWrapper
      className={{
        section: "bg-muted"
      }}
    >
      <FadeElement className="flex-1">
        <h1 className="Title font-semibold">
          What is <span className="text-primary-studio">Product Design</span>
        </h1>
      </FadeElement>
      <FadeElement className="flex-1 font-medium text-xl ">
        Product design is the process of creating and refining products that
        meet user needs and enhance their experience. We focus on functionality,
        usability, and aesthetics to deliver solutions that resonate with your
        target audience.
      </FadeElement>
    </SectionWrapper>
  );
};

export default ProductDesign;
