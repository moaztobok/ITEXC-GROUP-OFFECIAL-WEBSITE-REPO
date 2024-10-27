import CustomerCards from "@/components/home/CustomerCards";
import { FadeElement } from "@/components/magicui/fade-text";
import { Product } from "@/data/types";

const ProductSection = ({
  label,
  title,
  team_id,
  data
}: {
  label: string;
  title: string;
  team_id: number;
  data: Product[];
}) => {
  return (
    <section className="min-h-screen grid items-center relative overflow-hidden">
      <FadeElement>
        <div className="flex flex-col wrapper gap-6">
          <span className="font-semibold">{label}</span>
          <h2 className="justify-start Title">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {data.map((data, index) => (
              <FadeElement key={index}>
                <CustomerCards
                  team_id={team_id}
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

export default ProductSection;
