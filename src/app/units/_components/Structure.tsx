import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Card from "./Card";

const Structure = ({
  title,
  description,
  cardsData
}: {
  title: string;
  description: string;
  cardsData: { title: string; description: string }[];
}) => {
  return (
    <SectionWrapper
      className={{
        section: "bg-muted"
      }}
    >
      <div className="flex flex-col gap-8">
        <FadeElement>
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="text-xl font-medium">{description}</p>
          </div>
        </FadeElement>
        <FadeElement>
          <div className="flex flex-row gap-6 flex-wrap">
            {cardsData.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
          </div>
        </FadeElement>
      </div>
    </SectionWrapper>
  );
};

export default Structure;
