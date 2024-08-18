import React from "react";
import { CustomButton } from "./Custom-btn";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ArrowButton = ({ className }: { className?: string }) => {
  return (
    <CustomButton
      label={<ArrowRight className="text-xs aspect-square" width={16} />}
      className={cn(
        "text-sm p-1 aspect-square  w-fit h-fit bg-white text-foreground rounded-full hover:bg-white/90 font-semibold",
        className
      )}
    />
  );
};

export default ArrowButton;
