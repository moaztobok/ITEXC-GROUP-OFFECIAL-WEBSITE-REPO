import { FadeElement } from "@/components/magicui/fade-text";
import TdGraphics from "./TdGraphics";

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-background relative overflow-hidden">
      <TdGraphics />
      {/* <div className="aspect-square w-96 rounded-full blur-[200px] absolute -bottom-48 -right-48 z-50 scale-150 bg-primary" /> */}
      <FadeElement className="h-full pointer-events-none">
        <div className="p-4 max-w-[1440px] mx-auto flex flex-col justify-center h-full flex-1 items-start relative gap-2 md:gap-4 overflow-hidde ">
          <h1 className="md:text-left w-full text-center md:text-8xl text-4xl font-bold md:max-w-6xl">
            Elevate Your Brand
            <span className="text-primary-studio p-4">Identity</span>
          </h1>
          <p className="md:w-1/2  md:text-left  text-base text-center">
            Elevate your brand or business, Craft unique identities that
            resonate and drive growth.
          </p>
        </div>
      </FadeElement>
    </section>
  );
};

export default HeroSection;
