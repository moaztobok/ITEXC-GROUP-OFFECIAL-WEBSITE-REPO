import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Link from "next/link";
import { services, units } from "@/data/data";
const EmbededLink = () => {
  //this is a very bad component that was mad in a rush
  return (
    <Accordion type="multiple" className="w-full divide-x-0 divide-y-0">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="gap-2 py-2 hover:no-underline data-[state=open]:text-primary text-xl justify-start font-semibold border-0 border-none">
          Our services
        </AccordionTrigger>
        <AccordionContent className="border-b-0 border-none flex flex-col gap-4 ps-4 pt-2">
          {services.map((service, index) => (
            <Link
              href={service.href}
              key={index}
              className="hover:no-underline font-semibold text-xl hover:text-primary"
            >
              {service.title}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-none">
        <AccordionTrigger className="gap-2 py-2 hover:no-underline text-xl justify-start  data-[state=open]:text-primary font-semibold border-0 border-none">
          Our units
        </AccordionTrigger>
        <AccordionContent className="border-b-0 border-none flex flex-col gap-4 ps-4 pt-2">
          {units.map((unit, index) => (
            <Link
              href={unit.url}
              key={index}
              className="hover:no-underline font-semibold text-xl hover:text-primary"
            >
              {unit.title}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default EmbededLink;
