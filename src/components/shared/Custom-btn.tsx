"use client";
import { cn, getTailwindBackgroundColor } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";
import { Button, ButtonProps } from "../ui/button";
import { usePathname } from "next/navigation";

export interface CustomButtonProps extends ButtonProps {
  label: string | ReactNode;
  isSubmitting?: boolean;
}

export const CustomButton = React.forwardRef<
  HTMLButtonElement,
  CustomButtonProps
>(({ className, label, isSubmitting, ...props }, ref) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading indicator, or a default view
  }
  return (
    <Button
      ref={ref}
      {...props}
      className={cn(
        "rounded-none py-6 px-8 hover:scale-105 transition-all duration-500 text-lg ",
        getTailwindBackgroundColor(pathname),
        className
      )}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting" : label}
    </Button>
  );
});

CustomButton.displayName = "CustomButton";
