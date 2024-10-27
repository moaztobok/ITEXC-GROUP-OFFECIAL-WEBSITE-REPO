import { Vortex } from "@/components/ui/vortex";

const TdGraphics = () => {
  return (
    <>
      <Vortex
        rangeY={400}
        particleCount={100}
        rangeHue={10}
        baseHue={82}
        containerClassName="h-full w-full absolute z-0"
      />
    </>
  );
};

export default TdGraphics;
