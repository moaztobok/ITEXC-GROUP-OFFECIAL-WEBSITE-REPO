import EngineeringProcess from "./_components/EngineeringProcess";
import HeroSection from "./_components/HeroSection";
import MobileDevelopment from "./_components/MobileDevelopment";
import MobileProducts from "./_components/MobileProducts";
import WebDevelopment from "./_components/WebDevelopment";
import WebProducts from "./_components/WebProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITEXC Group | Software development",
  description:
    "Empowering businesses to seamlessly integrate and build custom software solutions, ITEXC Group transforms digital needs into reliable, scalable applications."
};

const page = () => {
  return (
    <main className="min-h-screen ">
      <HeroSection />
      <WebDevelopment />
      <WebProducts />
      <MobileDevelopment />
      <MobileProducts />
      <EngineeringProcess />
    </main>
  );
};

export default page;
