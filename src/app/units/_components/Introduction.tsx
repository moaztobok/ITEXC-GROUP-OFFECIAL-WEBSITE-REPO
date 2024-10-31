import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";

const Introduction = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <SectionWrapper
      className={{
        section: "bg-muted"
      }}
    >
      <FadeElement className="flex-1">
        <h1 className="Title font-semibold">{title}</h1>
      </FadeElement>
      <FadeElement className="flex-1 font-medium text-xl">
        {description}
      </FadeElement>
    </SectionWrapper>
  );
};

export default Introduction;
