import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";

const Brand = () => {
  return (
    <SectionWrapper
      className={{
        section: "bg-muted"
      }}
    >
      <FadeElement className="flex-1">
        <h1 className="Title font-semibold">
          What is a <span className="text-primary-studio">Brand identity</span>
        </h1>
      </FadeElement>
      <FadeElement className="flex-1 font-medium text-xl ">
        A brand is more than just a logo and color palette. We&apos;ll craft a
        distinct visual and verbal identity, create necessary assets, and
        establish clear brand guidelines to maintain consistency across all
        touchpoints.
      </FadeElement>
    </SectionWrapper>
  );
};

export default Brand;
