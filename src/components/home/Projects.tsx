import { carouselData } from "@/data/data";
import Link from "next/link";
import { FadeElement } from "../magicui/fade-text";
import GradualSpacing from "../magicui/gradual-spacing";
import ArrowButton from "../shared/ArrowButton";
import { CustomButton } from "../shared/Custom-btn";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = () => {
  return (
    <section className="min-h-screen bg-muted w-full py-10 grid items-center overflow-hidden">
      <FadeElement>
        <div className="flex flex-col gap-6">
          <div className="wrapper flex flex-col gap-6 py-0 my-0">
            <span className="font-semibold">Our Case studies</span>
            <GradualSpacing
              text="Latest projects"
              className="justify-start  Title"
            ></GradualSpacing>
            {/* <h2 className="justify-start block md:hidden Title">
              Latest projects
            </h2> */}
          </div>
          <ProjectsCarousel data={carouselData} />
          <div className="wrapper my-0 md:px-8 md:items-center gap-4 md:mt-10 flex-col md:flex-row items-start  font-bold flex md:justify-between">
            <Link
              href="/projects"
              className="flex items-center gap-4 hover:opacity-80"
            >
              View all Cases{" "}
              <ArrowButton className="w-8 h-8 text-background hover:bg-foreground hover:scale-100 bg-foreground" />{" "}
            </Link>
            <CustomButton label="Start Pursuing excellence" />
          </div>
        </div>
      </FadeElement>
    </section>
  );
};

export default Projects;
