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
        description="ITEXC ERP specializes in implementing and customizing ERP systems to help organizations streamline processes, enhance efficiency, and gain operational control. With expertise across various platforms, ITEXC ERP provides tailored solutions that drive digital transformation and meet clients' unique business needs."
        image="https://images.unsplash.com/photo-1634696684126-462b1a767e22?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
