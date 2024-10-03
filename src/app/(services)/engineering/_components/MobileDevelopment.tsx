import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";

const MobileDevelopment = () => {
  return (
    <SectionWrapper
      className={{
        section: "bg-muted"
      }}
    >
      <FadeElement className="flex-1">
        <h1 className="text-3xl font-semibold">
          Our <span className="text-primary">mobile development</span> services?
        </h1>
      </FadeElement>
      <FadeElement className="flex-1 font-medium  text-xl">
        Mobile development includes app creation, security, UX/UI design,
        eCommerce integration, architecture design, testing, maintenance,
        consulting, and custom platform development.
      </FadeElement>
    </SectionWrapper>
  );
};

export default MobileDevelopment;
