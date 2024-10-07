import EngineeringProcess from "./_components/EngineeringProcess";
import HeroSection from "./_components/HeroSection";
import MobileDevelopment from "./_components/MobileDevelopment";
import MobileProducts from "./_components/MobileProducts";
import WebDevelopment from "./_components/WebDevelopment";
import WebProducts from "./_components/WebProducts";

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
