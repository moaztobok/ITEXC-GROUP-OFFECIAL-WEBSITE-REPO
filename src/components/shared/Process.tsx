import type { ProcessStep } from "@/data/types";
import Image from "next/image";
import { FadeElement } from "../magicui/fade-text";
import { CustomButton } from "./Custom-btn";

const Process = ({ data }: { data: ProcessStep[] }) => {
  return (
    <section className="w-full bg-background grid items-center">
      <FadeElement>
        <div className="wrapper flex flex-col md:flex-[0.5] gap-6">
          <span className="font-semibold ">Our process</span>
          <h2 className="justify-start  Title">Collaborate with Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
            {data.map((step, index) => (
              <FadeElement key={index}>
                <div className="flex flex-col gap-4 mt-2">
                  {/* <ShineBorder
                    borderRadius={0}
                    className="relative flex aspect-square flex-col  min-w-[150px]  items-center justify-center overflow-hidden rounded-none  bg-background "
                    color={["#1F00FF", "#FFFFFF", "#1F00FF", "#1F00FF", "#1F00FF"]}
                  > */}
                  <Image
                    src={step.image}
                    className="aspect-square object-cover"
                    alt={step.title}
                    width={150}
                    height={400}
                  />
                  {/* <div className='relative flex items-center justify-center'>
                                                <BorderBeam colorFrom='#1F00FF' colorTo='white' borderWidth={2} />
                                                
                                            </div> */}
                  {/* </ShineBorder> */}
                  <span className="font-semibold text-lg">{step.title}</span>
                  <span>{step.description}</span>
                </div>
              </FadeElement>
            ))}
          </div>
          <div className="flex mt-10">
            <CustomButton
              label="let's collaborate"
              className="font-semibold text-lg"
            />
          </div>
        </div>
      </FadeElement>
    </section>
  );
};

export default Process;
