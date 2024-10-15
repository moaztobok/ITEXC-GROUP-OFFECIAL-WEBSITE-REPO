"use client";
import GridPattern from "@/components/magicui/animated-grid-pattern";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const TdGraphics = () => {
  const [isClient, setIsClient] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading indicator, or a default view
  }

  return (
    <>
      {matches ? (
        <iframe
          src="https://my.spline.design/retrofuturismbganimation-05267393b9e06aacc4c5fed930104250/"
          className="absolute h-full -z-1 select-none"
          width="120%"
          height="120%"
        />
      ) : (
        <GridPattern className="opacity-25" />
      )}
    </>
  );
};

export default TdGraphics;
