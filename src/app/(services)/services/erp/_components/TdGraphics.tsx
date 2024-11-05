"use client";
import { Vortex } from "@/components/ui/vortex";
import { useEffect, useState } from "react";

const TdGraphics = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading indicator, or a default view
  }
  return (
    <>
      <Vortex
        rangeY={400}
        particleCount={200}
        rangeHue={10}
        baseHue={324}
        containerClassName="h-full w-full absolute z-0"
      />
    </>
  );
};

export default TdGraphics;
