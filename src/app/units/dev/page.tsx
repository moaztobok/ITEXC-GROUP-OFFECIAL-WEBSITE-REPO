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
        description="The Software Development Division is responsible for designing,
            developing, and maintaining software solutions for ITEXC
            Group's clients and internal projects. As the core division, it
            plays a crucial role in driving innovation and delivering
            high-quality software products that meet client needs and industry
            standards across all of ITEXC Group's services. This
            division's work spans from web and mobile applications to
            complex enterprise systems, ensuring that ITEXC Group remains at the
            forefront of technological advancements. The Software Development
            Division collaborates closely with other divisions, providing
            technical expertise and support for their respective projects and
            initiatives."
        image="https://images.unsplash.com/photo-1653549892798-c8596ad08ee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1YmUlMjAzZHxlbnwwfDF8MHx8fDA%3D"
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
      <JoinUs />
    </main>
  );
};

export default page;
