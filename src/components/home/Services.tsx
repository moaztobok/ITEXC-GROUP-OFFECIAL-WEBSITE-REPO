import { FadeElement } from "../magicui/fade-text";
import GradualSpacing from "../magicui/gradual-spacing";
import { CustomButton } from "../shared/Custom-btn";
import ServicesAccordion from "./Components/ServicesAccordion";

const Services = () => {
  return (
    <div className="w-full min-h-[80vh] flex items-center  bg-foreground text-background relative overflow-hidden">
      {/* <Image src='/images/itexc-pattern.svg' className="-right-32 opacity-5 -brightness-200 top-0 absolute" width={600} height={300} alt="bg-image" /> */}
      <FadeElement className="w-full h-full " direction="up">
        <div className="wrapper gap-4 flex flex-col">
          <GradualSpacing
            text="How we can help you"
            className="justify-start hidden md:block text-4xl font-semibold"
          ></GradualSpacing>
          <h2 className="justify-start block md:hidden text-4xl font-semibold">
            How we can help you
          </h2>
          <ServicesAccordion />
          <CustomButton
            label="View all services"
            className="text-lg bg-white text-foreground w-fit mt-8 hover:bg-white/95 font-semibold"
          />
        </div>
      </FadeElement>
    </div>
  );
};

export default Services;
