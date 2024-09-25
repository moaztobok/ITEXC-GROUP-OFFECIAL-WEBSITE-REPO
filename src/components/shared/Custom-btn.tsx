import { cn } from "@/lib/utils";
import React from "react";
import { Button, ButtonProps } from "../ui/button";

export interface CustomButtonProps extends ButtonProps {
  label: string;
}

export const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        className={cn(
          "rounded-none py-6 px-8 hover:scale-105 transition-all duration-500 text-lg",
          className
        )}
      >
        {label}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";