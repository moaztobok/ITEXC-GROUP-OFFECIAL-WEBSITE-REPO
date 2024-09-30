import { FadeElement } from "../magicui/fade-text";
import { CustomButton } from "../shared/Custom-btn";
import TdGraphics from "./TdGraphics";

const HeroSection = () => {
  return (
    <section className="h-screen bg-black grid items-center text-background relative overflow-hidden">
      <TdGraphics />
      <FadeElement>
        <div className="wrapper flex flex-col md:justify-center items-center md:gap-2 relative overflow-hidden">
          <h2 className="md:text-5xl md:w-auto w-full text-3xl font-bold ">
            Next-gen enterprise
          </h2>
          <h1 className="md:w-auto w-full md:text-7xl text-4xl font-bold">
            Ready to persue excellence
          </h1>
          <p className="md:w-auto w-full text-left md: mt-4 text-base ">
            Empowering businesses with cutting-edge software development,
            design, and system integration
          </p>
          <div className="mt-10 flex  font-normal w-full md:w-auto gap-4  flex-wrap">
            <CustomButton
              label="Get started"
              className="text-lg border border-primary flex-1"
            />
            <CustomButton
              label="How it works"
              className="text-lg text-foreground bg-transparent flex-1 outline-2 hover:bg-white/20 outline-white text-white border"
            />
          </div>
        </div>
      </FadeElement>
    </section>
  );
};

export default HeroSection;
