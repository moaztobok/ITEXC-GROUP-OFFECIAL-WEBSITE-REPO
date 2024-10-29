import React from "react";
import HeroSection from "./_components/HeroSection";
import { Metadata } from "next";
import Introduction from "../_components/Introduction";
import Responsibilities from "../_components/Responsibilities";
import Structure from "../_components/Structure";
import JoinUs from "../_components/JoinUs";

export const metadata: Metadata = {
  title: "ITEXC Studio",
  description:
    "Craft impactful digital experiences and branding that resonate with your audience and elevate your brand identity."
};

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Introduction
        title="What is ITEXC Studio"
        description="ITEXC Studio's Design division is a creative powerhouse within
        ITEXC Group, focusing on creating visually stunning and user-centric
        designs for digital products and brand identities."
      />
      <Responsibilities
        title="Responsibilities and Importance"
        description="The Design Studio, as part of ITEXC Studio, is responsible for
            creating visually appealing and user-friendly designs for ITEXC
            Group's software products and client projects. This division
            plays a crucial role in enhancing user experience and ensuring that
            all products meet high aesthetic standards. From user interface
            design to branding and visual identity creation, the Design Studio
            ensures that ITEXC Group's solutions are not only functional
            but also visually impressive and intuitive to use."
        image="https://images.unsplash.com/photo-1653549892798-c8596ad08ee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1YmUlMjAzZHxlbnwwfDF8MHx8fDA%3D"
      />
      <Structure
        title="Division Structure"
        description="Creative hub for UI/UX and brand design excellence"
        cardsData={[
          {
            title: "Head of Design",
            description:
              "Oversees all design projects and ensures brand consistency"
          },
          {
            title: "Studio Project manager",
            description:
              "Manage individual design projects, timelines, and resources"
          },
          {
            title: "Studio Sales",
            description: "Managing Leads and Client relations and pricing"
          },
          {
            title: "Creatives",
            description:
              "Producers of high-quality designs and imegry for various projects"
          }
        ]}
        hiring
      />
      <JoinUs />
    </main>
  );
};

export default page;
