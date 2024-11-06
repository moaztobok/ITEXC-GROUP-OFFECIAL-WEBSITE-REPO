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
        description="ITEXC Studio’s Design Studio creates visually appealing, user-friendly designs for ITEXC Group’s products and client projects. Focusing on user experience, it delivers high aesthetic standards across UI, branding, and visual identity, ensuring ITEXC Group’s solutions are both functional and visually engaging."
        image="https://images.unsplash.com/photo-1577645113639-32537a4a938b"
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
      <JoinUs type="studio" />
    </main>
  );
};

export default page;
