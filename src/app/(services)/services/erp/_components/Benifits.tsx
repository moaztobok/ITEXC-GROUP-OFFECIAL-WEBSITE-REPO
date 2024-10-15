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
            Benefits of <span className="text-primary-erp">ERP Systems</span>
          </h2>
          <p>
            Managing all resources from a single application instead of multiple
            systems brings numerous advantages. Centralizing your management
            streamlines processes, reduces costs, and boosts efficiency.
          </p>
          <List>
            <ListItem text="Significant Cost Reduction" />
            <ListItem text="All-in-One Solution for Management" />
            <ListItem text="Time Savings by Streamlining Processes" />
            <ListItem text="Enhanced Control and Reporting" />
          </List>
          <p>
            By reducing the number of systems and clicks in daily operations,
            ERP systems like Odoo help save time and provide deeper insights
            through centralized data and custom reports.
          </p>
        </div>
      </FadeElement>
      <FadeElement className="flex-1 flex justify-center items-center">
        <Image
          src="/thumbnails/thumbnail-erp.png"
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
