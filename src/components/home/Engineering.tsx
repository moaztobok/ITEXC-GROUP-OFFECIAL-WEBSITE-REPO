import React from "react";
import { CustomButton } from "../shared/Custom-btn";
import { FadeElement } from "../magicui/fade-text";

const Engineering = () => {
  return (
    <section className="w-full bg-background grid items-center">
      <div className="wrapper flex gap-16 flex-col md:flex-row">
        <FadeElement>
          <div className="flex flex-col gap-6">
            <span className="font-semibold">Our core</span>
            <h2 className="justify-start text-4xl font-bold">
              Software Development is Where we excel{" "}
            </h2>
            <p>
              Where innovation meets code. We excel in crafting bespoke software
              solutions that transform your business challenges into powerful,
              efficient applications. Our expertise drives your digital success.
            </p>
            <div className="mt-10 flex flex-col md:flex-row font-normal w-full md:w-auto gap-4">
              <CustomButton
                label="Start your project"
                className="text-lg border border-primary"
              />
              <CustomButton
                label="Learn more"
                className="text-lg text-foreground bg-foreground outline-2 hover:bg-foreground/85 text-white border"
              />
            </div>
          </div>
        </FadeElement>

        <div className="flex flex-col md:flex-row items-center gap-10 my-10">
          <FadeElement direction="up">
            <div className="flex flex-col">
              <p className="text-2xl font-semibold">Web development</p>
              <p>
                From responsive websites to complex web apps, we craft tailored
                online solutions that engage users and drive business growth
              </p>
            </div>
          </FadeElement>
          <FadeElement direction="up">
            <div className="flex flex-col">
              <p className="text-2xl font-semibold">Mobile development</p>
              <p>
                Intuitive, powerful apps for iOS and Android. We bring your
                mobile vision to life, ensuring seamless user experiences across
                devices
              </p>
            </div>
          </FadeElement>
        </div>
      </div>
    </section>
  );
};

export default Engineering;
