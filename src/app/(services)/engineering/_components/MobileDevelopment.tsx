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
        <h1 className="text-2xl font-semibold">
          Our <span className="text-primary">mobile development</span> services?
        </h1>
      </FadeElement>
      <FadeElement className="flex-1 font-medium">
        Mobile development encompasses a wide range of services, including
        building mobile apps, ensuring app security, crafting intuitive user
        experiences (UX) and interfaces (UI), integrating eCommerce solutions,
        designing robust mobile architectures, performing quality assurance
        testing, providing continuous maintenance, offering consulting services,
        and developing custom mobile platforms.
      </FadeElement>
    </SectionWrapper>
  );
};

export default MobileDevelopment;
