"use client";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const LenisScroll = () => {
  const pathName = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
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
