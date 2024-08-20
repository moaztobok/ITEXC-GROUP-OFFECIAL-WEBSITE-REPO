import ItexcAcaddmy from "@/components/home/ItexcAcaddmy";
import Customers from "@/components/home/Customers";
import Engineering from "@/components/home/Engineering";
import HeroSection from "@/components/home/HeroSection";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import PlaceHolder from "@/components/shared/PlaceHolder";
import Process from "@/components/home/Process";

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
      <PlaceHolder />
    </>
  );
}
