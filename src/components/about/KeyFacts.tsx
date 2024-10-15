import Image from "next/image";
import { FadeElement } from "../magicui/fade-text";
import SectionWrapper from "../shared/SectionWrapper";

const KeyFacts = () => {
  return (
    <SectionWrapper>
      <FadeElement className="flex-1 flex flex-col font-medium">
        <div className="flex flex-col gap-6 h-full justify-center">
          <h2 className="justify-start Title">What is Itexc group?</h2>
          <p className="text-balance">
            ITEXC GROUP aims to transform Algeria&apos;s IT landscape by
            delivering exceptional solutions, fostering talent, and driving
            innovation. Led by Laid Belhadj, the company empowers businesses and
            individuals through technology, shaping the future while building a
            community of skilled professionals committed to excellence and
            growth in the IT sector.
          </p>
        </div>
      </FadeElement>
      <FadeElement className="flex flex-1 justify-center items-center">
        <Image
          src="/Group- full-lockup.svg"
          alt="group-icon"
          width={100}
          height={150}
          className="w-72"
        />
      </FadeElement>
    </SectionWrapper>
  );
};

export default KeyFacts;
