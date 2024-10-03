import Engineering from "@/components/home/Engineering";
import HeroSection from "@/components/home/HeroSection";
import ItexcAcaddmy from "@/components/home/ItexcAcaddmy";
import Products from "@/components/home/Products";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Process from "@/components/shared/Process";
import { projectStages } from "@/data/data";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Engineering />
      <Projects />
      <Products />
      <ItexcAcaddmy />
      <Process data={projectStages} />
    </>
  );
}
