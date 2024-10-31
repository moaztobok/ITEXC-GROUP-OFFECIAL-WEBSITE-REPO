import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Card from "./Card";
import { Button } from "@/components/ui/button";

const Structure = ({
  title,
  description,
  cardsData,
  hiring
}: {
  title: string;
  description: string;
  cardsData: { title: string; description: string }[];
  hiring?: boolean;
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
        {hiring && (
          <FadeElement>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-semibold">We’re hiring!</h1>
                <p className="text-lg">Bring your talent</p>
              </div>
              <div>
                <Button
                  variant="ghost"
                  className="border border-black rounded-none h-12 w-40 hover:bg-gray-200"
                >
                  Join Our Team
                </Button>
              </div>
            </div>
          </FadeElement>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Structure;
