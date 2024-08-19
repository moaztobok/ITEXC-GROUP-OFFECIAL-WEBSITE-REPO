import React from "react";
import { FadeElement } from "../magicui/fade-text";
import { customerData } from "@/data/data";
import CustomerCards from "./Components/CustomerCards";
import HighlightedText from "./Components/HighlightedText";

const Customers = () => {
  return (
    <section className="min-h-screen grid items-center relative overflow-hidden">
      <div className="flex flex-col wrapper gap-6">
        <FadeElement>
          <span className="font-semibold">Our Customers</span>
          <h2 className="Title">
            <HighlightedText>Transforming Businesses </HighlightedText>Through
            Innovative Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {customerData.map((data, index) => (
              <FadeElement key={index}>
                <CustomerCards
                  title={data.title}
                  description={data.description}
                  image={data.image}
                  url={data.url}
                />
              </FadeElement>
            ))}
          </div>
        </FadeElement>
      </div>
    </section>
  );
};

export default Customers;
