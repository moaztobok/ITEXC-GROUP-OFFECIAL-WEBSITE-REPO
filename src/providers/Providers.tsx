"use client";

import { LenisProvider } from "@/context/LenisContext";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return <LenisProvider>{children}</LenisProvider>;
};
