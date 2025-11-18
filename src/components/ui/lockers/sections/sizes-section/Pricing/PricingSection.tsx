import { getTranslate } from "@/lib/helpers/getTranslate";
import PricingCard from "./PricingCard";

interface PricingItem {
  title: string;
  price: string;
  description: string;
  delay: number;
  highlighted?: boolean;
}

const PricingSection = async () => {
  const translateData: any = await getTranslate("pricing");
  const pricing = [
    {
      title: translateData.items[0].title,
      price: "€5.99",
      description: translateData.items[0].description,
      delay: 0,
    },
    {
      title: translateData.items[1].title,
      price: "€7.99",
      description: translateData.items[1].description,
      delay: 100,
      highlighted: true,
    },
    {
      title: translateData.items[2].title,
      price: "€10.99",
      description: translateData.items[2].description,
      delay: 200,
    },
  ];

  return (
    <section className="container ">
      <h2
        data-aos="fade-up"
        className="text-3xl text-[#F1F1F1] font-semibold text-start mb-6"
      >
        {translateData.title}
      </h2>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {pricing?.map((item, index) => (
          <PricingCard key={index} {...item} dayLabel={translateData.day} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
