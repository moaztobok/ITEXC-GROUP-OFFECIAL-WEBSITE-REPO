import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { getLogo } from "@/lib/utils";
import Image from "next/image";

const JoinUs = ({ type }: { type: "dev" | "erp" | "hr" | "studio" }) => {
  const imageSrc = getLogo(type);
  return (
    <SectionWrapper
      className={{
        section: "bg-white"
      }}
    >
      <FadeElement className="flex md:flex-row flex-col-reverse md:gap-0 gap-4 w-full">
        <div className="flex flex-col gap-6 md:flex-1">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">Join our team!</h1>
            <p className="text-lg">
              We&apos;re always looking for talented developers to join our
              innovative team.
            </p>
          </div>
          <div>
            <Button
              variant="ghost"
              className="border border-black text-base rounded-none h-12 w-40 hover:bg-gray-200"
            >
              Join Our Team
            </Button>
          </div>
        </div>
        <div className="flex-1 flex items-center md:justify-center justify-start">
          <div className="relative md:w-80 w-64 h-36">
            <Image
              src={imageSrc}
              alt="itexc logo"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </FadeElement>
    </SectionWrapper>
  );
};

export default JoinUs;
