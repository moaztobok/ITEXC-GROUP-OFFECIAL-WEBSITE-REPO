import { FadeElement } from "@/components/magicui/fade-text";
import Image from "next/image";
import React from "react";

const AcademyGraphics = () => {
  return (
    <FadeElement className="flex-1 h-full my-auto flex justify-center items-center">
      <Image
        src="./images/incubyte.svg"
        className="pointer-events-none w-1/2"
        width={250}
        height={500}
        sizes="400px"
        alt="circle"
      />
    </FadeElement>
  );
};

export default AcademyGraphics;
