import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";
import List from "@/components/ui/List";
import ListItem from "@/components/ui/ListItem";
import Image from "next/image";
import React from "react";

const Benifits = () => {
  return (
    <SectionWrapper>
      <FadeElement className="flex-1">
        <div className="flex flex-col gap-4 justify-center h-full">
          <h2 className="Title">
            Advantages of <span className="text-primary-hr">(HRM)</span>
          </h2>
          <p>
            Outsourcing HR functions to a professional team like ITEXC GROUP
            provides numerous advantages. It allows your business to focus on
            its core activities while ensuring HR functions are managed
            efficiently and cost-effectively.
          </p>
          <List>
            <ListItem text="Significant Cost Reduction" />
            <ListItem text="Access to Specialized Expertise" />
            <ListItem text="Time Savings & Operational Efficiency" />
            <ListItem text="Improved Risk Management & Compliance" />
          </List>
        </div>
      </FadeElement>
      <FadeElement className="flex-1 flex justify-center items-center">
        <Image
          src="/images/hr-human-resources.png"
          className="w-full object-cover"
          alt="erp-system"
          width={1080}
          height={600}
        />
      </FadeElement>
    </SectionWrapper>
  );
};

export default Benifits;
