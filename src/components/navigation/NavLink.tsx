import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";

const NavLink = ({
  title,
  href,
  className
}: {
  title: string;
  href: string;
  className?: string;
}) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            "hover:opacity-85 items-center gap-3 inline-flex h-10 px-4 py-2 focus:text-background bg-transparent hover:text-background focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent rounded-none",
            className
          )}
        >
          {title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};

export default NavLink;
