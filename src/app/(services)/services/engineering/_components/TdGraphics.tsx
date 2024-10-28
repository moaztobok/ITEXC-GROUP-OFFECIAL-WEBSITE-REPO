"use client";
import { Vortex } from "@/components/ui/vortex";
const TdGraphics = () => {
  return (
    <Vortex
      rangeY={350}
      particleCount={50}
      rangeHue={50}
      baseHue={220}
      containerClassName="h-full w-full absolute z-0"
    />
  );
};

export default TdGraphics;
