import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const JoinUs = () => {
  return (
    <SectionWrapper
      className={{
        section: "bg-white"
      }}
    >
      <FadeElement className="flex flex-row w-full">
        <div className="flex flex-col gap-6 flex-1">
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
        <div className="relative flex-1">
          <Image src="/Group- full-lockup.svg" alt="itexc logo" fill={true} />
        </div>
      </FadeElement>
    </SectionWrapper>
  );
};

export default JoinUs;
