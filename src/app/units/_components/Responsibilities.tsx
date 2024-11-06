import { FadeElement } from "@/components/magicui/fade-text";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";

const Responsibilities = ({
  title,
  description,
  image
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <SectionWrapper>
      <FadeElement className="flex-1">
        <div className="flex gap-4 flex-col justify-center h-full">
          <h1 className="font-bold text-3xl">{title}</h1>
          <p className="text-lg font-medium">{description}</p>
        </div>
      </FadeElement>
      <FadeElement className="flex-1 md:block hidden">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt="image representing the unit domain"
            width={800}
            height={800}
            className="object-cover w-full aspect-square"
          />
        </div>
      </FadeElement>
    </SectionWrapper>
  );
};

export default Responsibilities;
