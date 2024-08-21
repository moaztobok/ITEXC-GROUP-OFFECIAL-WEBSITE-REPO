import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger
} from "../ui/navigation-menu";

const NavDropDown = ({
  title,
  children,
  className
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <NavigationMenuItem className="bg-transparent">
      <NavigationMenuTrigger className="hover:opacity-85 focus:text-background bg-transparent hover:text-background focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent rounded-none">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className={cn(className)}>{children}</ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default NavDropDown;
