import Benifits from "./_components/Benifits";
import HeroSection from "./_components/HeroSection";
import HRM from "./_components/HRM";
import HrProcess from "./_components/HrProcess";
import HrQuote from "./_components/HrQuote";

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
