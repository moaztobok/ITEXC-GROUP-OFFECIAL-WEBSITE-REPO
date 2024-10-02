import Engineering from "@/components/home/Engineering";
import HeroSection from "@/components/home/HeroSection";
import ItexcAcaddmy from "@/components/home/ItexcAcaddmy";
import Process from "@/components/home/Process";
import Products from "@/components/home/Products";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Engineering />
      <Projects />
      <Products />
      <ItexcAcaddmy />
      <Process />
    </>
  );
}
