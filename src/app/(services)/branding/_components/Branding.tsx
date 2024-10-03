import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";
import List from "@/components/ui/List";
import ListItem from "@/components/ui/ListItem";
import Image from "next/image";
import React from "react";
const Branding = () => {
  return (
    <SectionWrapper>
      <FadeElement className="flex-1  ">
        <div className="flex flex-col gap-4 justify-center h-full">
          <h2 className="Title">
            Creating a <span className="text-primary-studio">Brand</span>
          </h2>
          <p>
            Your Brand and user experience are deeply interconnected. Our team
            specializes in crafting cohesive, tangible brand identities across
            all mediums, offering strategic guidance and ensuring consistency.
          </p>
          <List>
            <ListItem text="Brand Strategy & Positioning" />
            <ListItem text="Verbal & Visual Identity" />
            <ListItem text="Brand Guidelines" />
            <ListItem text="Brand Experiences" />
          </List>
        </div>
      </FadeElement>
      <FadeElement className="flex-1 flex justify-center items-center">
        <Image
          src="https://images.unsplash.com/photo-1635492491273-455af7728453?q=80&w=1860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full aspect-[10/14] object-cover"
          alt="digital-products"
          width={1080}
          height={600}
        />
      </FadeElement>
    </SectionWrapper>
  );
};

export default Branding;
