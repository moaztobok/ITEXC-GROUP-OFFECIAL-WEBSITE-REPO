"use client";

import { AnimatePresence, motion, useInView, Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { useRef } from "react";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  className
}: GradualSpacingProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.8 });
  return (
    <div className="flex justify-start space-x-0  " ref={ref}>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate={inView ? "visible" : ""}
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("drop-shadow-sm ", className)}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
