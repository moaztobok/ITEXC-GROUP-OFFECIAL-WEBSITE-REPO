import { FadeElement } from "@/components/magicui/fade-text";
import TdGraphics from "./TdGraphics";

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-background relative overflow-hidden">
      <TdGraphics />
      <FadeElement className="h-full">
        <div className="p-4 max-w-[1440px] mx-auto flex flex-col justify-center h-full flex-1 gap-2 md:gap-4 relative overflow-hidden items-center">
          <h1 className="w-full text-center md:text-7xl max-w-screen-md text-4xl font-bold pointer-events-none ">
            Elevate your<span className="text-primary-studio p-4">Brand</span>
          </h1>
          <p className="md:max-w-screen-md text-center pointer-events-none">
            Create a new sound and a vision for your brand that resonates with
            your audience. Our team of experts will help you craft a brand
            identity that is unique, memorable, and impactful.
          </p>
        </div>
      </FadeElement>
    </section>
  );
};

export default HeroSection;
