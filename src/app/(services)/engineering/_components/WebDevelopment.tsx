import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";

const WebDevelopment = () => {
  return (
    <SectionWrapper>
      <FadeElement className="flex-1">
        <h1 className="text-2xl font-semibold">
          Our <span className="text-primary">web development</span> services
        </h1>
      </FadeElement>
      <FadeElement className="flex-1 font-medium">
        Web development offers a broad spectrum of services, such as creating
        websites or web applications, providing cybersecurity measures,
        designing user experiences (UX) and interfaces (UI), offering eCommerce
        solutions, building website infrastructures, conducting quality
        assurance testing, ongoing maintenance, consulting, and developing
        custom content management systems (CMS).
      </FadeElement>
    </SectionWrapper>
  );
};

export default WebDevelopment;
