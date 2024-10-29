import Benifits from "./_components/Benifits";
import HeroSection from "./_components/HeroSection";
import HRM from "./_components/HRM";
import HrProcess from "./_components/HrProcess";
import HrQuote from "./_components/HrQuote";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITEXC Group | Hr Managments",
  description:
    "Streamline your HR practices with ITEXC Group's innovative solutions that simplify recruitment, onboarding, and talent management, ensuring a dynamic workforce."
};

const page = () => {
  return (
    <main className="min-h-screen selection:bg-primary-hr">
      <HeroSection />
      <HRM />
      <Benifits />
      <HrQuote />
      <HrProcess />
    </main>
  );
};

export default page;
