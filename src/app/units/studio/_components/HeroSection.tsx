import { FadeElement } from "@/components/magicui/fade-text";
import TdGraphics from "./TdGraphics";

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-background relative overflow-hidden">
      <TdGraphics />
      <FadeElement className="h-full pointer-events-none">
        <div className="p-4 max-w-[1440px] mx-auto flex flex-col justify-center h-full flex-1 items-start relative gap-2 md:gap-4 overflow-hidde ">
          <h1 className="md:text-left w-full text-center md:text-7xl text-4xl font-bold pointer-events-none md:max-w-xl">
            Bradnding
            <span className="text-primary-studio p-4">Creatives</span>
          </h1>
          <p className="md:w-1/2  md:text-left text text-center  pointer-events-none">
            ITEXC Studio&apos;s creative team transforms ideas into impactful
            designs, building brands that capture attention and inspire
            connection
          </p>
        </div>
      </FadeElement>
    </section>
  );
};

export default HeroSection;
