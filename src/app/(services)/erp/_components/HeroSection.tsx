import { FadeElement } from "@/components/magicui/fade-text";
import TdGraphics from "./TdGraphics";

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-background relative overflow-hidden">
      <TdGraphics />
      {/* <div className="aspect-square w-96 rounded-full blur-[200px] absolute -bottom-48 -right-48 z-50 scale-150 bg-primary" /> */}
      <FadeElement className="h-full pointer-events-none">
        <div className="p-4 max-w-[1440px] mx-auto flex flex-col justify-center h-full gap-2 md:gap-4 flex-1 items-start relative overflow-hidden ">
          <h1 className="md:text-left w-full text-center md:text-8xl text-4xl font-bold  md:max-w-6xl">
            Streamline Integrate
            <span className="text-primary-erp p-4">Thrive</span>
          </h1>
          <p className="md:w-1/2 md:text-left text-base text-center ">
            Revolutionize operations: Seamlessly integrate your enterprise with
            our cutting-edge ERP.
          </p>
        </div>
      </FadeElement>
    </section>
  );
};

export default HeroSection;
