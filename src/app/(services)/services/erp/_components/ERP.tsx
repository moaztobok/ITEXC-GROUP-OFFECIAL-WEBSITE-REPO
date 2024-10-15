import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";

const Erp = () => {
  return (
    <SectionWrapper
      className={{
        section: "bg-muted"
      }}
    >
      <FadeElement className="flex-1">
        <h1 className="Title font-semibold">
          What is{" "}
          <span className="text-primary-erp">Enterprise resource planning</span>
        </h1>
      </FadeElement>
      <FadeElement className="flex-1 font-medium text-xl">
        Enterprise Resource Planning (ERP) integrates core business processes
        like finance, HR, procurement, and sales into a unified system, enabling
        automation, real-time reporting, and improved efficiency.
      </FadeElement>
    </SectionWrapper>
  );
};

export default Erp;
