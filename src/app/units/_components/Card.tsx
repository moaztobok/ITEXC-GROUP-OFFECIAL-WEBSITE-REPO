import { Box } from "lucide-react";

const Card = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="md:w-[580px] w-full min-h-60 border border-gray-300 p-8 flex flex-col gap-6">
      <div className="p-1 w-fit">
        <Box className="w-10 h-10" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <p className="font-normal text-base">&bull; {description}</p>
      </div>
    </div>
  );
};

export default Card;
