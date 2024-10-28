import { FadeElement } from "@/components/magicui/fade-text";
import TdGraphics from "./TdGraphics";

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-background relative overflow-hidden">
      <TdGraphics />
      {/* <div className="aspect-square w-96 rounded-full blur-[200px] absolute -bottom-48 -right-48 z-50 scale-150 bg-primary" /> */}
      <FadeElement className="h-full pointer-events-none">
        <div className="p-4 max-w-[1440px] mx-auto flex flex-col justify-center h-full flex-1 items-start relative overflow-hidden ">
          <h1 className="md:text-left w-full text-center md:text-7xl text-4xl font-bold pointer-events-none md:max-w-4xl">
            Your Strategic
            <span className="text-primary-hr p-4">HR Partner</span>
          </h1>
          <p className="md:w-1/2 md:text-left text-center ">
            Elevating businesses through expert HR outsourcing, workforce
            optimization, and talent empowerment strategies that drive
            sustainable success
          </p>
        </div>
      </FadeElement>
    </section>
  );
};

export default HeroSection;
