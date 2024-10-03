import { FadeElement } from "@/components/magicui/fade-text";
import Image from "next/image";
import React from "react";

const AcademyGraphics = () => {
  return (
    <FadeElement className="w-full md:flex-[0.5] md:mb-0">
      <div className="w-full relative flex flex-col gap-6 items-center justify-center select-none aspect-square">
        {/* <Image
          src="./images/emblem-border.svg"
          className="animate-spin transition-none  transition-transform  select-none duration-200000  md:w-3/4 w-full h-full top-0 left-0 md:h-3/4"
          width={400}
          height={500}
          alt="circle"
        /> */}
        <Image
          src="./images/incubyte.svg"
          className="pointer-events-none"
          width={250}
          height={500}
          alt="circle"
        />
        <h2 className="p-4 text-2xl font-semibold bg-[#E41A3A] text-background">
          Byte By Byte , Incubating excellence
        </h2>
      </div>
    </FadeElement>
  );
};

export default AcademyGraphics;
