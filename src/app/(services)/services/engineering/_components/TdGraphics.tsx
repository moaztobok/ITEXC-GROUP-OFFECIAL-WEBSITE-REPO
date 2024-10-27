import { Vortex } from "@/components/ui/vortex";
const TdGraphics = () => {
  return (
    <Vortex
      rangeY={400}
      particleCount={100}
      rangeHue={20}
      baseHue={220}
      containerClassName="h-full w-full absolute z-0"
    />
  );
};

export default TdGraphics;
