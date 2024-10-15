import { FadeElement } from "../magicui/fade-text";
import TdGraphics from "./TdGraphics";

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-background relative overflow-hidden">
      <TdGraphics />
      {/* <div className="aspect-square w-96 rounded-full blur-[200px] absolute -bottom-48 -right-48 z-50 scale-150 bg-primary" /> */}
      <FadeElement className="h-full">
        <div className="p-4 max-w-[1440px] mx-auto flex flex-col justify-center h-full flex-1 gap-2 items-start md:gap-2 relative overflow-hidden pointer-events-none ">
          <h1 className="md:w-auto md:text-left w-full text-center md:text-8xl text-4xl font-bold pointer-events-none">
            Your Partners in
          </h1>
          <h1 className="w-full md:w-fit text-center md:text-8xl text-4xl font-bold pointer-events-none text-primary">
            excellence
          </h1>
          <p className="md:w-1/2  md:text-left md: mt-4 text-base text-center  pointer-events-none">
            Your dedicated partner in digital transformation, committed to
            empowering your business to reach new heights of success and
            innovation
          </p>
        </div>
      </FadeElement>
    </section>
  );
};

export default HeroSection;
