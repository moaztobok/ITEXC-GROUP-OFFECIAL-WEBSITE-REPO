"use client";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { CarouselData } from "@/data/types";
import { cn, truncateString } from "@/lib/utils";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectsCarousel = ({ data }: { data: CarouselData[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Update `current` index when slide is scrolled manually
  useEffect(() => {
    if (api) {
      api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }
  }, [api]);

  return (
    <Carousel setApi={setApi} className="max-w-[100vw] md:mt-10 relative">
      <CarouselContent className="gap-6 md:mx-52 lg:mx-96 my-auto relative">
        {data.map((project, index) => (
          <CarouselItem key={index} className="md:max-w-xl  max-w-[100vw]">
            <CardContent className="flex my-auto flex-col p-4 md:p-6  gap-4 w-screen md:w-auto">
              <div className="relative">
                <Image
                  src={project.image}
                  width={400}
                  height={300}
                  className="w-full cursor-pointer aspect-[16/10] hover:scale-105 transition-all duration-300 object-cover"
                  alt={project.title}
                />
                <div className="absolute bottom-2 right-2 flex md:hidden"></div>
              </div>
              <Link href={project.url} className="text-lg font-semibold">
                {project.title}
              </Link>
              <span className="text-muted-foreground">
                {truncateString(project.description, 200)}
              </span>
            </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="my-4 bottom-0 flex md:hidden z-50 justify-center">
        {data.map((_, dotIndex) => (
          <Dot
            size={42}
            strokeWidth={2}
            key={dotIndex}
            className={cn(`cursor-pointer md:hidden opacity-35`, {
              "opacity-100 text-primary": current === dotIndex
            })}
            onClick={() => {
              api?.scrollTo(dotIndex);
              setCurrent(dotIndex);
            }}
          />
        ))}
      </div>
      <CarouselPrevious className="top-1/3 hidden md:flex bg-foreground start-[15%] w-16 h-16 text-4xl text-background border-none transition-all duration-200" />
      <CarouselNext className="top-1/3 hidden md:flex bg-foreground end-[15%] w-16 h-16 text-4xl text-background border-none transition-all duration-200" />
    </Carousel>
  );
};

export default ProjectsCarousel;
