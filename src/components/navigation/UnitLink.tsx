import Image from "next/image";
import Link from "next/link";
import React from "react";
type Unit = {
  title: string;
  desc: string;
  imageUrl: string;
  url: string;
};
const UnitLink = ({ unit }: { unit: Unit }) => {
  return (
    <Link href={unit.url}>
      <div className="flex gap-4 p-4 group hover:bg-background transition-all duration-150">
        <Image
          src={unit.imageUrl}
          className="border-foreground object-cover border aspect-square mb-auto"
          alt={unit.title}
          width={120}
          height={120}
        />
        <div className="flex flex-col gap-2 group-hover:text-foreground">
          <span className="font-semibold group-hover:underline">
            {unit.title}
          </span>
          <span className="text-wrap text-sm text-background/85 group-hover:text-foreground/85">
            {unit.desc}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default UnitLink;
