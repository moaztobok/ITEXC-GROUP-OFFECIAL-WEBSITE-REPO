import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { CustomButton } from "../../shared/Custom-btn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../../ui/accordion";

const services = [
  {
    id: "item-1",
    icon: "./icons/software-icon.svg",
    title: "Software engineering",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
    url: "/services/software-engineering"
  },
  {
    id: "item-2",
    icon: "./icons/design-icon.svg",
    title: "Design and branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
    url: "/services/design-branding"
  },
  {
    id: "item-3",
    icon: "./icons/erp-icon.svg",
    title: "Enterprise resource planning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
    url: "/services/erp"
  },
  {
    id: "item-4",
    icon: "./icons/hr-icon.svg",
    title: "Human resource services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..",
    url: "/services/hr"
  }
];

const ServicesAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full md:max-w-[65%]">
      {services.map((service) => (
        <AccordionItem
          key={service.id}
          value={service.id}
          className={service.id === "item-4" ? "border-b-0" : ""}
        >
          <AccordionTrigger className="hover:no-underline">
            <div className="flex gap-4 items-end">
              <Image
                width={32}
                height={32}
                src={service.icon}
                alt={`${service.title}-icon`}
              />
              <span>{service.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 md:ps-6">
            {service.description}
            <CustomButton
              label={<ArrowRight className="text-xs" width={16} />}
              className="text-sm p-1 aspect-square  w-fit h-fit bg-white text-foreground rounded-full hover:bg-white/90 font-semibold"
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ServicesAccordion;
