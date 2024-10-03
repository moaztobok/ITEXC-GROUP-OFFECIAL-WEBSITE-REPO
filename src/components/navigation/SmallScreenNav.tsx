"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { MenuIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import EmbededLink from "./EmbededLink";
import { Icon } from "./icon";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const SmallScreenNav = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    setOpen(false);
    return () => {
      setOpen(false);
    };
  }, [pathName]);

  return (
    <Sheet open={open}>
      <SheetTrigger asChild>
        <Button
          className="bg-transparent hover:bg-transparent"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full text-xl min-h-screen overflow-scroll flex flex-col max-h-fit">
        <X
          size={24}
          className="bg-foreground text-background absolute end-4 top-4 z-20 rounded-full"
          onClick={() => setOpen(!open)}
        />
        <SheetHeader>
          <SheetTitle>
            <Icon icon="#1F00FF" wordmark="#000000" />
          </SheetTitle>
        </SheetHeader>
        <NavigationMenu className="flex-1">
          <NavigationMenuList className="flex flex-col items-start">
            <EmbededLink />
            <NavLink
              className="px-0 font-semibold"
              href="/carrers"
              title="Carrers"
            />
            <NavLink
              className="px-0 font-semibold"
              href="/about-us"
              title="About us"
            />
            <NavLink
              className="px-0 font-semibold"
              href="/consulting"
              title="Consulting"
            />
          </NavigationMenuList>
        </NavigationMenu>
        <SheetClose />
        <SheetDescription className="mt-auto">
          Pursue excellence
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default SmallScreenNav;
