import React from "react";
import { FadeElement } from "../magicui/fade-text";
import GradualSpacing from "../magicui/gradual-spacing";

const Service = ({
  label,
  title,
  description,
  subTitle1,
  subTitle2,
  subDescription1,
  subDescription2,
  children
}: {
  label: string;
  title: string;
  description: string;
  subTitle1?: string;
  subTitle2?: string;
  subDescription1?: string;
  subDescription2?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section className="w-full bg-background grid items-center">
      <div className="wrapper flex gap-16 flex-col md:flex-row">
        <FadeElement>
          <div className="flex flex-col gap-6">
            <span className="font-semibold">{label}</span>
            <GradualSpacing
              text={title}
              className="justify-start Title"
            ></GradualSpacing>
            <p>{description}</p>
            {/* <div className="mt-10 flex flex-col md:flex-row font-normal w-full md:w-auto gap-4">
                            <CustomButton
                                label="Start your project"
                                className="text-lg border border-primary"
                            />
                            <CustomButton
                                label="Learn more"
                                className="text-lg text-foreground bg-foreground outline-2 hover:bg-foreground/85 text-white border"
                            />
                        </div> */}
            {children}
          </div>
        </FadeElement>

        <div className="flex flex-col md:flex-row items-center gap-10 my-10">
          <FadeElement direction="up">
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold">{subTitle1}</p>
              <p>{subDescription1}</p>
            </div>
          </FadeElement>
          <FadeElement direction="up">
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold">{subTitle2}</p>
              <p>{subDescription2}</p>
            </div>
          </FadeElement>
        </div>
      </div>
    </section>
  );
};

export default Service;
