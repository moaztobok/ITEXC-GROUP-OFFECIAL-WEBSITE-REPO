import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";
import List from "@/components/ui/List";
import ListItem from "@/components/ui/ListItem";
import Image from "next/image";
import React from "react";

const ProductMarketing = () => {
  return (
    <SectionWrapper>
      <FadeElement className="flex-1 ">
        <div className="flex flex-col gap-4 justify-center h-full">
          <h2 className="Title">
            Product{" "}
            <span className="text-primary-studio">Marketing Design</span>
          </h2>
          <p>
            Elevate your product&apos;s presence with impactful marketing
            design. Our team specializes in crafting visually compelling and
            strategically aligned materials to boost your product’s appeal and
            drive conversions.
          </p>
          <List>
            <ListItem text="Brand-Aligned Visuals" />
            <ListItem text="Landing Page & Ad Design" />
            <ListItem text="Product Presentation Decks" />
            <ListItem text="Social Media & Email Campaigns" />
          </List>
        </div>
      </FadeElement>
      <FadeElement className="flex-1 flex justify-center items-center">
        <Image
          src="https://images.unsplash.com/photo-1607703703674-df96af81dffa?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="product-marketing"
          width={1080}
          height={600}
          className="w-full aspect-[10/12] object-cover"
        />
      </FadeElement>
    </SectionWrapper>
  );
};

export default ProductMarketing;
