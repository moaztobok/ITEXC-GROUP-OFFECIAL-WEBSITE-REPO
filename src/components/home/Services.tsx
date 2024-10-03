import { HomeServices } from "@/data/data";
import { FadeElement } from "../magicui/fade-text";
import { CustomButton } from "../shared/Custom-btn";
import ServicesAccordion from "../shared/ServicesAccordion";

const Services = () => {
  return (
    <div className="w-full min-h-[80vh] flex items-center  bg-muted text-foreground relative overflow-hidden [&>svg>path]:fill-[var(--foreground)]">
      <FadeElement className="w-full h-full " direction="up">
        <div className="wrapper gap-4 flex flex-col">
          <h2 className="justify-start Title">How we can help you</h2>
          <ServicesAccordion services={HomeServices} />
          <CustomButton
            label="View all services"
            className="text-lg bg-foreground text-background w-fit mt-8 hover:bg-foreground/95 font-semibold"
          />
        </div>
      </FadeElement>
    </div>
  );
};

export default Services;
