"use client";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { CarouselData } from "@/data/types";
import { truncateString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const ProjectsCarousel = ({ data }: { data: CarouselData[] }) => {
  return (
    <Carousel className="max-w-[100vw] md:mt-10">
      <CarouselContent className="gap-6 max-w-[100vw] md:mx-52 lg:mx-96 my-auto ">
        {data.map((project) => (
          <CarouselItem key={project.id} className="md:max-w-xl pl-7">
            <CardContent className="flex my-auto flex-col p-0 gap-4">
              <Image
                src={project.image}
                width={400}
                height={300}
                className="w-full cursor-pointer h-80  hover:scale-105 transition-all duration-300 object-cover"
                alt={project.title}
              />
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
      <CarouselPrevious className="top-1/3 hidden md:flex bg-foreground start-[15%] w-16 h-16 text-4xl text-background border-none  transition-all duration-200" />
      <CarouselNext className="top-1/3 hidden md:flex bg-foreground end-[15%] w-16 h-16 text-4xl  text-background border-none transition-all duration-200" />
    </Carousel>
  );
};

export default ProjectsCarousel;
