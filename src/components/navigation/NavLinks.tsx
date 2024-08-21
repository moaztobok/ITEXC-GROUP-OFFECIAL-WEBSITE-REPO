"use client";

import {
  NavigationMenu,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { services, units } from "@/data/data";
import { ListItem } from "./ListItem";
import NavDropDown from "./NavDropDown";
import NavLink from "./NavLink";
import UnitLink from "./UnitLink";

export function NavigationItems() {
  return (
    <NavigationMenu className="gap-2 divide-x-0 marker:hidden">
      <NavigationMenuList>
        <NavDropDown
          title="Services"
          className="bg-foreground text-background text-nowrap rounded-none p-4"
        >
          {services.map((service, index) => (
            <ListItem href={service.href} title={service.title} key={index}>
              {service.desc}
            </ListItem>
          ))}
        </NavDropDown>
        <NavDropDown
          title="Our units"
          className="bg-foreground text-background text-nowrap rounded-none  grid grid-cols-2 w-[760px] gap-4 p-4"
        >
          {units.map((unit, index) => (
            <UnitLink unit={unit} key={index} />
          ))}
        </NavDropDown>
        <NavLink className="bg-transparent" href="/carrers" title="Carrers" />
        <NavLink href="/about-us" title="About us" />
        <NavLink href="/consulting" title="Consulting" />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
