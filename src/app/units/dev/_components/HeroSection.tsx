import { FadeElement } from "@/components/magicui/fade-text";
import TdGraphics from "./TdGraphics";

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-background relative overflow-hidden">
      <TdGraphics />
      <FadeElement className="h-full">
        <div className="p-4 max-w-[1440px] mx-auto flex flex-col justify-center h-full flex-1 gap-2 md:gap-4  items-start relative overflow-hidden pointer-events-none ">
          <h1 className="md:text-left w-full text-center md:text-7xl text-4xl font-bold pointer-events-none md:max-w-5xl">
            Digitalization
            <span className="text-primary p-4">Experts</span>
          </h1>
          <p className="md:w-1/2  md:text-left text text-center  pointer-events-none">
            Our core development team turns complex challenges into elegant
            solutions, building software that powers enterprise transformation
          </p>
        </div>
      </FadeElement>
    </section>
  );
};

export default HeroSection;
