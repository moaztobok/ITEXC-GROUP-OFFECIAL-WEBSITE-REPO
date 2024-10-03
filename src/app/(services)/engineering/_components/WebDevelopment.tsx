import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";

const WebDevelopment = () => {
  return (
    <SectionWrapper
      className={{
        section: "bg-muted"
      }}
    >
      <FadeElement className="flex-1">
        <h1 className="Title font-semibold">
          Our <span className="text-primary">Web development</span> services
        </h1>
      </FadeElement>
      <FadeElement className="flex-1 font-medium text-xl">
        Web development covers website and web app creation, cybersecurity,
        UX/UI design, eCommerce, infrastructure, testing, maintenance,
        consulting, and custom CMS development.
      </FadeElement>
    </SectionWrapper>
  );
};

export default WebDevelopment;
