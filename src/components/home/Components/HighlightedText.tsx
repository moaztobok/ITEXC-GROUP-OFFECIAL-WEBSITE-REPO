import React, { ReactNode } from "react";

const HighlightedText = ({ children }: { children: ReactNode }) => {
  return <span className="relative">
    {/* <span className="after:w-full pe-2 after:h-full after:top-0 after:bg-gradient-to-r after:from-transparent after:to-primary/50 after:rounded-e-full after:animate-ping z-10 after:absolute after:left-0 after:px-4 after:z-[-1]"></span> */}{children}
  </span>;
};

export default HighlightedText;
