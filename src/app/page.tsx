import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import PlaceHolder from "@/components/shared/PlaceHolder";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <PlaceHolder />
    </>
  );
}
