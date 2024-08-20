import Customers from "@/components/home/Customers";
import Engineering from "@/components/home/Engineering";
import HeroSection from "@/components/home/HeroSection";
import ItexcAcaddmy from "@/components/home/ItexcAcaddmy";
import Process from "@/components/home/Process";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Engineering />
      <Projects />
      <Customers />
      <ItexcAcaddmy />
      <Process />
    </>
  );
}
