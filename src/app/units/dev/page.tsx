import React from "react";
import HeroSection from "./_components/HeroSection";
import { Metadata } from "next";
import Introduction from "../_components/Introduction";
import Responsibilities from "../_components/Responsibilities";
import Structure from "../_components/Structure";
import JoinUs from "../_components/JoinUs";

export const metadata: Metadata = {
  title: "ITEXC Engineering",
  description:
    "Harness engineering excellence to create innovative IT solutions that drive business success."
};

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Introduction
        title="Our Core Unit"
        description="The Software Development Division is the core division of ITEXC Group,
        encompassing all software development activities across various projects
        and other divisions."
      />
      <Responsibilities
        title="Responsibilities and Importance"
        description="The Software Development division designs, develops, and maintains software for ITEXC Group’s clients and internal projects. As a core unit, it drives innovation and delivers high-quality solutions, from web and mobile apps to complex enterprise systems. This division collaborates with other units, ensuring ITEXC Group stays at the forefront of technology."
        image="https://images.unsplash.com/photo-1645181196184-3ae5bf3fc91d"
      />
      <Structure
        title="Division Structure"
        description="The Software Development Division is the core division of ITEXC Group,
        encompassing all software development activities across various projects
        and other divisions."
        cardsData={[
          {
            title: "Project Managers",
            description:
              "Oversees all software development projects and teams across all divisions"
          },
          {
            title: "Project Cordinators",
            description:
              "Manage individual software projects, timelines, and resources"
          },
          {
            title: "IT Sales Team",
            description: "Manage Leads and client relations"
          },
          {
            title: "Team Leads",
            description: "Guide and manage specific development teams"
          },
          {
            title: "Senior Engineers",
            description:
              "Lead complex development tasks and mentor junior staff"
          },
          {
            title: "Engineers",
            description: "Develop and maintain software applications"
          },
          {
            title: "Junior Engineers",
            description:
              "Assist in development tasks and learn from senior staff"
          }
        ]}
      />
      <JoinUs type="dev" />
    </main>
  );
};

export default page;
