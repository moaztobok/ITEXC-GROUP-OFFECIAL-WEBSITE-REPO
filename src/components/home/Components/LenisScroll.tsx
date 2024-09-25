"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
const LenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return null;
};

export default LenisScroll;
