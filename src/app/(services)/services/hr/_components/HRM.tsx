import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";

const HRM = () => {
  return (
    <SectionWrapper
      className={{
        section: "bg-muted"
      }}
    >
      <FadeElement className="flex-1">
        <h1 className="Title font-semibold">
          What is{" "}
          <span className="text-primary-hr">
            Human Resources Management (HRM)?
          </span>
        </h1>
      </FadeElement>
      <FadeElement className="flex-1 font-medium text-xl">
        HRM oversees workforce management in a company. HR outsourcing delegates
        functions like payroll and recruitment to external providers, saving
        resources and ensuring legal compliance.
      </FadeElement>
    </SectionWrapper>
  );
};

export default HRM;
