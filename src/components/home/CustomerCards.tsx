import ArrowButton from "@/components/shared/ArrowButton";
import { Card } from "@/components/ui/card";
import { truncateString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CustomerCards = ({
  title,
  description,
  url,
  serviceUrl,
  image
}: {
  title: string;
  description: string;
  url: string;
  serviceUrl: string;
  image: string;
}) => {
  return (
    <Card className="border-none flex w-full h-full flex-col gap-4 shadow-none">
      <div className=" w-full relative">
        <Image
          width={600}
          height={100}
          alt={title}
          src={image}
          className="w-full object-cover aspect-[6/4]  top-0 left-0"
        />
      </div>
      <Link href={serviceUrl} className="text-lg font-semibold hover:underline">
        {title}
      </Link>
      <span className="text-muted-foreground">
        {truncateString(description, 150)}
      </span>
      <Link
        href={url}
        className="inline-flex items-center gap-4 hover:opacity-50 mt-auto"
      >
        {" "}
        Get Quote <ArrowButton className="p-0" />
      </Link>
    </Card>
  );
};

export default CustomerCards;
