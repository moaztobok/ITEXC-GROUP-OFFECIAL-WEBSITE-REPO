import { Card } from "@/components/ui/card";
import { Product } from "@/data/types";
import { truncateString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GetQuoteModal } from "../shared/GetQuoteModal";

const CustomerCards = ({
  team_id,
  title,
  description,
  url,
  serviceUrl,
  image
}: Product) => {
  console.log(url);
  return (
    <Card className="border-none flex w-full h-full flex-col gap-4 shadow-none">
      <div className="w-full relative">
        <Image
          width={600}
          height={100}
          alt={title}
          src={image}
          className="object-cover aspect-[6/4] top-0 left-0"
        />
      </div>
      <Link href={serviceUrl} className="text-lg font-semibold hover:underline">
        {title}
      </Link>
      <span className="text-muted-foreground">
        {truncateString(description, 150)}
      </span>
      <GetQuoteModal
        buttonLabel="Get Quote"
        buttonClassName="flex justify-start items-center gap-4 hover:opacity-50 mt-auto hover:bg-transparent text-lg p-0"
        team_id={team_id}
        title={title}
      />
    </Card>
  );
};

export default CustomerCards;
