import { FadeElement } from "@/components/magicui/fade-text";
import { Icon } from "@/components/navigation/icon";
import { CustomButton } from "@/components/shared/Custom-btn";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const SubFooter = () => {
  return (
    <footer className="bg-foreground text-background">
      <FadeElement>
        <div className="flex-col divide-y gap-4 my-0 wrapper">
          <div className="flex flex-col-reverse md:flex-row w-full gap-16 justify-between py-10">
            <div className="flex flex-col gap-8 justify-between ">
              <Icon icon="#1F00FF" wordmark="#FFFFFF" />
              <div className="grid grid-cols-2 md:flex justify-between flex-wrap w-full gap-8">
                <Link href="/jobs">Get a job</Link>
                <Link href="/partners" className="ms-auto">
                  Our partners
                </Link>
                <Link href="/products">Products</Link>
                <Link href="/services" className="ms-auto">
                  Services
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:max-w-[50%]">
              <p>Join our newsletter</p>
              <div className="flex flex-col md:flex-row gap-8">
                <Input
                  placeholder="Enter your email"
                  className="h-full text-lg min-h-12 rounded-none bg-transparent text-background placeholder:text-background"
                />{" "}
                <CustomButton label="Subscribe" />
              </div>
              <p>
                By subscribing you agree to with our{" "}
                <Link href="/policies" className="underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between flex-wrap w-full gap-16   py-10">
            <div className="flex justify-between flex-wrap gap-8">
              <Link href="/policies" className="underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-services" className="underline">
                Terms of Service
              </Link>
              <Link href="/cookies" className="underline">
                Cookies Settings
              </Link>
            </div>
            <p>© 2024 ITEXC GROUP. All rights reserved</p>
          </div>
        </div>
      </FadeElement>
    </footer>
  );
};

export default SubFooter;
