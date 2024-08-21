import React, { ReactNode } from "react";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface listItemProps extends React.ComponentPropsWithoutRef<"a"> {
  Icon?: ReactNode;
  href: string;
}
export const ListItem = React.forwardRef<React.ElementRef<"a">, listItemProps>(
  ({ className, title, children, Icon, href, ...props }, ref) => {
    return (
      <li className="marker:hidden group">
        <NavigationMenuLink asChild>
          <Link
            href={href}
            ref={ref}
            className={cn(
              "block select-none space-y-1  p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">
              {title} {Icon}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-background/85 group-hover:text-foreground/85">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
