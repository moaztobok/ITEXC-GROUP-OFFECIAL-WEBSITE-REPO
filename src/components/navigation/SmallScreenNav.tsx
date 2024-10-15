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
import { usePathname } from "next/navigation";
import React, { SetStateAction, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Icon } from "./icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui/accordion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Item = {
  label: string;
  href?: string;
  subItems?: Item[];
};

const menuItems: Item[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    subItems: [
      { label: "Software Development", href: "/engineering" },
      { label: "Branding & Design", href: "/branding" },
      { label: "ERP solutions", href: "/erp" },
      { label: "Hr Managments", href: "/hr" }
    ]
  },
  {
    label: "Units",
    subItems: [
      { label: "Engineering", href: "/units/category1" },
      { label: "Studio", href: "/units/category2" },
      { label: "Erp", href: "/units/category3" },
      { label: "Hr", href: "/units/category3" }
    ]
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const MenuItem = ({
  item,
  depth = 0,
  setOpen,
  open,
  pathName
}: {
  item: Item;
  depth?: number;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  open: boolean;
  pathName: string;
}) => {
  if (item.subItems) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={item.label} className="border-b-0">
          <AccordionTrigger
            className={cn(
              "py-2  text-left text-foreground hover:text-primary hover:no-underline text-lg",
              pathName === item.href ? "text-primary" : "text-foreground"
            )}
          >
            {item.label}
          </AccordionTrigger>
          <AccordionContent>
            <div className="pl-4 divide-y">
              {item.subItems.map((subItem) => (
                <MenuItem
                  pathName={pathName}
                  key={subItem.label}
                  item={subItem}
                  depth={depth + 1}
                  setOpen={setOpen}
                  open={open}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  if (item.href)
    return (
      <Link
        href={item.href}
        className={cn(
          "block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors",
          pathName === item.href ? "text-primary" : "text-foreground"
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {item.label}
      </Link>
    );
};

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
          className="bg-transparent hover:bg-transparent py-0 px-0"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuIcon className="py-0 px-0" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full p-4 text-xl min-h-screen overflow-scroll flex flex-col max-h-fit">
        <X
          size={24}
          className="border-muted-foreground border text-muted-foreground absolute end-4 top-4 z-20 rounded-md"
          onClick={() => setOpen(!open)}
        />
        <SheetHeader>
          <SheetTitle>
            <Icon icon="#1F00FF" wordmark="#000000" />
          </SheetTitle>
        </SheetHeader>
        <div className="h-full flex justify-center flex-col">
          <div className="w-full h-fit divide-y">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                item={item}
                setOpen={setOpen}
                open={open}
                pathName={pathName}
              />
            ))}
          </div>
        </div>
        <SheetClose />
        <SheetDescription className="mt-auto">
          Pursue excellence
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default SmallScreenNav;
