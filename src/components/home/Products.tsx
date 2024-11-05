import { customerData } from "@/data/data";
import { FadeElement } from "../magicui/fade-text";
import CustomerCards from "./CustomerCards";

const Products = () => {
  return (
    <section className="min-h-screen grid items-center relative overflow-hidden">
      <FadeElement>
        <div className="flex flex-col wrapper gap-6">
          <span className="font-semibold">Our Customers</span>
          <h2 className="justify-start block Title">Solutions for Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {customerData.map((data, index) => (
              <FadeElement key={index}>
                <CustomerCards
                  team_id={data.team_id}
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

export default Products;
