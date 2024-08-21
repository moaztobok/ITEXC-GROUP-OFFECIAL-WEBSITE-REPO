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
            <SheetContent className="w-full ">
                <div className="w-full h-full relative flex flex-col gap-32">
                    <SheetHeader>
                        <SheetTitle>
                            <Icon icon="#1F00FF" wordmark="#000000" />
                        </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col">
                        <NavigationMenu>
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
                    </div>
                </div>
                <SheetClose />
                <SheetDescription>Pursue excellence</SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

export default SmallScreenNav;
