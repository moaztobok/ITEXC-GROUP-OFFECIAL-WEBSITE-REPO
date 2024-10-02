import { FadeElement } from "@/components/magicui/fade-text";
import TdGraphics from "./TdGraphics";

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-background relative overflow-hidden">
      <TdGraphics />
      {/* <div className="aspect-square w-96 rounded-full blur-[200px] absolute -bottom-48 -right-48 z-50 scale-150 bg-primary" /> */}
      <FadeElement className="h-full">
        <div className="p-4 max-w-[1440px] mx-auto flex flex-col justify-center h-full flex-1 items-start relative overflow-hidden pointer-events-none ">
          <h1 className="md:text-left w-full text-center md:text-8xl text-4xl font-bold pointer-events-none md:max-w-6xl">
            We Empower Your
            <span className="text-primary-hr p-4  ">Workforce</span>
          </h1>
          <p className="md:w-1/2  md:text-left md: mt-4 text-base text-center  pointer-events-none">
            Transform your human resources management with our comprehensive HR
            services. We streamline recruitment, optimize talent development,
            and foster a positive workplace culture.
          </p>
        </div>
      </FadeElement>
    </section>
  );
};

export default HeroSection;
