import { customerData } from "@/data/data";
import { FadeElement } from "../magicui/fade-text";
import GradualSpacing from "../magicui/gradual-spacing";
import CustomerCards from "./CustomerCards";

const Customers = () => {
  return (
    <section className="min-h-screen grid items-center relative overflow-hidden">
      <FadeElement>
        <div className="flex flex-col wrapper gap-6">
          <span className="font-semibold">Our Customers</span>
          <GradualSpacing
            text="Solutions for Success"
            className="justify-start Title"
          ></GradualSpacing>
          {/* <h2 className="justify-start block md:hidden Title">
            Solutions for Success
          </h2> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {customerData.map((data, index) => (
              <FadeElement key={index}>
                <CustomerCards
                  title={data.title}
                  description={data.description}
                  image={data.image}
                  url={data.url}
                  serviceUrl={data.serviceUrl}
                />
              </FadeElement>
            ))}
          </div>
        </div>
      </FadeElement>
    </section>
  );
};

export default Customers;
