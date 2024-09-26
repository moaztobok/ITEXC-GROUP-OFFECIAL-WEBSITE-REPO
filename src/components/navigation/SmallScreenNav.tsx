import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import EmbededLink from "./EmbededLink";
import { Icon } from "./icon";
import NavLink from "./NavLink";
const SmallScreenNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent hover:bg-transparent">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full min-h-screen text-xl overflow-scroll flex flex-col max-h-fit">
        <SheetHeader>
          <SheetTitle>
            <Icon icon="#1F00FF" wordmark="#000000" />
          </SheetTitle>
        </SheetHeader>
        <NavigationMenu className="flex-1">
          <NavigationMenuList className="flex flex-col items-start">
            <EmbededLink />
            <NavLink
              className="px-0 font-semibold hover:text-primary"
              href="/carrers"
              title="Carrers"
            />
            <NavLink
              className="px-0 font-semibold hover:text-primary"
              href="/about-us"
              title="About us"
            />
            <NavLink
              className="px-0 font-semibold hover:text-primary"
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
