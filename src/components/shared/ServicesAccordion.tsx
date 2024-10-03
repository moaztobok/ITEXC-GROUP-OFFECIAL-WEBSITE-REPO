import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { CustomButton } from "./Custom-btn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui/accordion";
import { Service } from "@/data/types";

const ServicesAccordion = ({ services }: { services: Service[] }) => {
  return (
    <Accordion type="single" collapsible className="w-full md:max-w-[65%]">
      {services.map((service) => (
        <AccordionItem
          key={service.id}
          value={service.id}
          className={service.id === "item-4" ? "border-b-0" : ""}
        >
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-4 text-lg md:text-xl ">
              <Image
                width={32}
                height={32}
                src={service.icon}
                alt={`${service.title}-icon`}
              />
              <span>{service.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 md:ps-6 text-lg">
            {service.description}
            <CustomButton
              label={<ArrowRightIcon className="text-xs" width={16} />}
              className="text-sm p-1 aspect-square  w-fit h-fit bg-foreground text-background rounded-full hover:bg-foreground/90 font-semibold"
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ServicesAccordion;
