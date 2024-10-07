import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";
import List from "@/components/ui/List";
import ListItem from "@/components/ui/ListItem";
import Image from "next/image";
import React from "react";

const OdooPartner = () => {
  return (
    <SectionWrapper
      className={{
        section: "relative min-h-[500px]"
      }}
    >
      <FadeElement className="flex-1 z-10 flex flex-col gap-4">
        <h2 className="Title text-white">Your official Odoo Partner</h2>
        <h2 className="text-xl text-white">
          ITEXC GROUP is an official odoo partner that commits to
        </h2>
        <div className="text-white">
          <List>
            <ListItem text="Train their staff by following Odoo training sessions" />
            {/* <ListItem text='Become a Certified Odoo Partner' /> */}
            <ListItem text="Have dedicated resources assigned to Odoo projects" />
            <ListItem text="Be available for periodic meetings with Odoo account managers" />
            <ListItem text="Be the 1st level of support for the client & use Odoo for the 2nd level of support" />
            <ListItem text="Promote Odoo Enterprise in their region" />
          </List>
        </div>
      </FadeElement>
      <FadeElement className="flex-1 z-10 flex items-center justify-center">
        <Image
          src="/thumbnails/partners.png"
          alt="Official partner"
          width={1000}
          height={200}
          className="w-full"
        />
      </FadeElement>
      <Image
        className="absolute inset-0 z-0 w-full h-full object-cover select-none"
        width={1920}
        height={800}
        src="https://images.unsplash.com/photo-1417733403748-83bbc7c05140"
        alt="OdooPartner"
      />
      {/* <div className='w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent absolute inset-0 z-0' /> */}
      <div className="w-full h-full bg-black/75 absolute inset-0 z-0" />
    </SectionWrapper>
  );
};

export default OdooPartner;
