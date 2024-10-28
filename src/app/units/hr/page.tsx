import React from "react";
import HeroSection from "./_components/HeroSection";
import { Metadata } from "next";
import Introduction from "../_components/Introduction";
import Responsibilities from "../_components/Responsibilities";

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
        description="The HR Solutions division, known as ITEXC HR, provides comprehensive
            human resources consulting services to ITEXC Group's clients.
            This division is essential in helping organizations optimize their
            HR processes, improve employee engagement, and develop effective
            talent management strategies. ITEXC HR leverages cutting-edge HR
            technologies and best practices to deliver solutions that enhance
            workforce productivity, foster positive workplace cultures, and
            align human capital with business objectives."
        image="https://images.unsplash.com/photo-1653549892798-c8596ad08ee6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1YmUlMjAzZHxlbnwwfDF8MHx8fDA%3D"
      />
    </main>
  );
};

export default page;
