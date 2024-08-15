import React from "react";
import ServicesAccordion from "./ServicesAccordion";
import { CustomButton } from "../shared/Custom-btn";
import { FadeElement } from "../magicui/fade-text";

const Services = () => {
  return (
    <div className="w-full min-h-[80vh] flex items-center  bg-primary text-background ">
      <FadeElement className="w-full h-full" direction="left">
        <div className="wrapper gap-4 flex flex-col">
          <h2 className="text-4xl font-semibold">How we can help you</h2>
          <ServicesAccordion />
          <CustomButton
            label="View all services"
            className="text-lg bg-white text-primary w-fit mt-8 hover:bg-white/90 font-semibold"
          />
        </div>
      </FadeElement>
    </div>
  );
};

export default Services;
