import React from "react";
import { FadeElement } from "../magicui/fade-text";

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
            <h2 className="justify-start Title">{title}</h2>
            <p>{description}</p>
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
