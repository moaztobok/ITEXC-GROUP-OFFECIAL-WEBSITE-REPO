"use client";
import { cn, getTailwindBackgroundColor } from "@/lib/utils";
import React, { ReactNode } from "react";
import { Button, ButtonProps } from "../ui/button";
import { usePathname } from "next/navigation";

export interface CustomButtonProps extends ButtonProps {
  label: string | ReactNode;
}

export const CustomButton = React.forwardRef<
  HTMLButtonElement,
  CustomButtonProps
>(({ className, label, ...props }, ref) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Button
      ref={ref}
      {...props}
      className={cn(
        "rounded-none py-6 px-8 hover:scale-105 transition-all duration-500 text-lg ",
        getTailwindBackgroundColor(pathname),
        className
      )}
    >
      {label}
    </Button>
  );
});

CustomButton.displayName = "CustomButton";
