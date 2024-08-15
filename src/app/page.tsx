import Engineering from "@/components/home/Engineering";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import PlaceHolder from "@/components/shared/PlaceHolder";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Engineering />
      <PlaceHolder />
    </>
  );
}
