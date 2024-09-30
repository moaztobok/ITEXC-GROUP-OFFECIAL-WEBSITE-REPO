import Image from "next/image";
import { FadeElement } from "../magicui/fade-text";
import SectionWrapper from "../shared/SectionWrapper";

const Founder = () => {
  return (
    <SectionWrapper
      className={{
        section: "bg-muted",
        innerWrapper: "flex flex-col-reverse"
      }}
    >
      <FadeElement className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center gap-6 text-lg">
          <Image src="/icons/quote.svg" alt="quote" width={40} height={40} />
          <p className="text-2xl md:text-4xl font-semibold max-w-full ">
            &quot;We are coding a technologically advanced Algeria it into
            reality, one innovative mind at a time&quot;
          </p>
          <div className="flex flex-col gap-2 font-medium">
            <p>Founder & general manager of ITEXC GROUP</p>
            <p>Laid Belhadj</p>
          </div>
        </div>
      </FadeElement>
      <FadeElement className="flex-1">
        <div
          className="
             justify-center items-center w-full"
        >
          <Image
            src="/images/founder.jpg"
            alt="founder"
            width={500}
            height={500}
            className="rounded-full mx-auto"
          />
        </div>
      </FadeElement>
    </SectionWrapper>
  );
};

export default Founder;
