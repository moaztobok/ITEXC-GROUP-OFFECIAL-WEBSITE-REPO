import React from "react";
import HeroSection from "./_components/HeroSection";
import { Metadata } from "next";
import Responsibilities from "../_components/Responsibilities";
import Introduction from "../_components/Introduction";
import Structure from "../_components/Structure";
import JoinUs from "../_components/JoinUs";

export const metadata: Metadata = {
  title: "ITEXC ERP Solutions",
  description:
    "Streamline and enhance core operations with customized ERP solutions tailored to your business needs."
};

const page = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Introduction
        title="What is ITEXC ERP?"
        description="ITEXC ERP is the specialized Enterprise Resource Planning division of
        ITEXC Group, focusing on implementing and customizing ERP solutions for
        businesses across various industries."
      />
      <Responsibilities
        title="Responsibilities and Importance"
        description="The ERP Integration division, known as ITEXC ERP, specializes in
            implementing and customizing Enterprise Resource Planning systems
            for ITEXC Group's clients. This division plays a crucial role in
            helping organizations streamline their business processes, improve
            efficiency, and gain better control over their operations through
            integrated ERP solutions. ITEXC ERP's expertise spans various ERP
            platforms, ensuring that clients receive tailored solutions that
            best fit their unique business needs and drive digital
            transformation."
        image="https://images.unsplash.com/photo-1653549892798-c8596ad08ee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1YmUlMjAzZHxlbnwwfDF8MHx8fDA%3D"
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
      <JoinUs type="erp" />
    </main>
  );
};

export default page;
