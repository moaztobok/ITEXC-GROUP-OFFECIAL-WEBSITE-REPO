"use client";
import { cn, getUnitColor } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useHover } from "usehooks-ts";
import { CustomButton } from "../shared/Custom-btn";
import { Icon } from "./icon";
import { NavigationItems } from "./NavLinks";
import SmallScreenNav from "./SmallScreenNav";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setIsVisible(false); // Hide the navbar
      } else {
        setIsVisible(true); // Show the navbar
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-fit z-30 transition-transform duration-500",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled ? "bg-black/75 backdrop-blur-3xl" : "bg-transparent"
      )}
    >
      <div className="wrapper py-3 my-0 flex justify-between items-center">
        <Link href="/">
          <Icon
            icon={isScrolled || isHover ? getUnitColor(pathname) : "white"}
          />
        </Link>
        <div className={cn("gap-6 items-center hidden md:flex text-white")}>
          <NavigationItems />
          <Link href="#contact">
            <CustomButton label="Contact us" />
          </Link>
        </div>
        <div className="md:hidden">
          <SmallScreenNav />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
