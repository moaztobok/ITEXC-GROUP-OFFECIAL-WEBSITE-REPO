import React from "react";
import HeroSection from "./_components/HeroSection";
import { Metadata } from "next";
import Introduction from "../_components/Introduction";
import Responsibilities from "../_components/Responsibilities";
import Structure from "../_components/Structure";
import JoinUs from "../_components/JoinUs";

export const metadata: Metadata = {
  title: "ITEXC HR Management",
  description:
    "Optimize workforce management with tailored solutions that empower your employees and drive organizational efficiency."
};

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Introduction
        title="What is ITEXC HR?"
        description="ITEXC HR is the specialized human resources consulting arm of ITEXC
        Group, offering comprehensive HR solutions to organizations of all
        sizes."
      />
      <Responsibilities
        title="Responsibilities and Importance"
        description="ITEXC HR offers comprehensive HR consulting, helping organizations optimize processes, boost employee engagement, and develop effective talent strategies. By leveraging advanced HR technologies and best practices, ITEXC HR enhances workforce productivity, fosters a positive workplace culture, and aligns human capital with business goals."
        image="https://images.unsplash.com/photo-1693389107440-afe980ccbb8d"
      />
      <Structure
        title="Division Structure"
        description="Seamless ERP implementation and integration experts"
        cardsData={[
          {
            title: "Head of ERP",
            description: "Oversees all ERP integration projects and strategies"
          },
          {
            title: "Implementation Leads",
            description: "Guide and manage specific ERP implementation teams"
          },
          {
            title: "Consultants",
            description: "Provide ERP solutions and advice to clients"
          },
          {
            title: "ERP Sales Team",
            description: "Client relations and meetings"
          }
        ]}
      />
      <JoinUs type="hr" />
    </main>
  );
};

export default page;
