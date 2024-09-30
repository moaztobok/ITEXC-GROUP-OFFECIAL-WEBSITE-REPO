import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { CustomButton } from "../shared/Custom-btn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui/accordion";

const services = [
  {
    id: "item-1",
    icon: "./icons/software-icon.svg",
    title: "Software engineering",
    description:
      "Our software engineers build custom solutions tailored to your business needs. From web and mobile apps to complex enterprise systems, we deliver high-quality software.",
    url: "/services/software-engineering"
  },
  {
    id: "item-2",
    icon: "./icons/design-icon.svg",
    title: "Design and branding",
    description:
      "We create stunning designs that capture your brand's essence. Our team specializes in UI/UX, branding, and graphic design. We help you stand out in a crowded market.",
    url: "/services/design-branding"
  },
  {
    id: "item-3",
    icon: "./icons/erp-icon.svg",
    title: "Enterprise resource planning",
    description:
      "Optimize your operations with our ERP solutions. We implement, customize, and support ERP systems to drive efficiency",
    url: "/services/erp"
  },
  {
    id: "item-4",
    icon: "./icons/hr-icon.svg",
    title: "Human resource services",
    description:
      "We help you manage your workforce effectively. Our HR services include recruitment, payroll, and HR consulting.",
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
