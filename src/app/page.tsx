import Customers from "@/components/home/Customers";
import Engineering from "@/components/home/Engineering";
import HeroSection from "@/components/home/HeroSection";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import PlaceHolder from "@/components/shared/PlaceHolder";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Engineering />
      <Projects />
      <Customers />
      <PlaceHolder />
    </>
  );
}
