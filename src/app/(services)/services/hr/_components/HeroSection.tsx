import { FadeElement } from "@/components/magicui/fade-text";
import TdGraphics from "./TdGraphics";

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-background relative overflow-hidden">
      <TdGraphics />
      <FadeElement className="h-full">
        <div className="p-4 max-w-[1440px] mx-auto flex flex-col justify-center h-full flex-1 gap-2 md:gap-4 relative overflow-hidden items-center">
          <h1 className="w-full text-center md:text-7xl max-w-screen-md text-4xl font-bold pointer-events-none ">
            We Empower
            <span className="text-primary-hr p-4">Your workforce</span>
          </h1>
          <p className="md:max-w-screen-md text-center pointer-events-none">
            Streamline your HR processes and empower your workforce with our HRM
            solution. Our team of experts will help you implement an HRM
            solution that is tailored to your needs and goals.
          </p>
        </div>
      </FadeElement>
    </section>
  );
};

export default HeroSection;
