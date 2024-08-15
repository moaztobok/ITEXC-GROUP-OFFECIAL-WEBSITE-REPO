import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Button } from "../ui/button";
export const CustomButton = ({
  label,
  className,
  onClick
}: {
  label: string | ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn("rounded-none py-6 px-8", className)}
    >
      {label}
    </Button>
  );
};
