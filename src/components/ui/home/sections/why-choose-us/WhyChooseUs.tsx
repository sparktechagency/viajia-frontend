import { getTranslate } from "@/lib/helpers/getTranslate";
import FeatureCard from "./FeatureCard";
import ChooseImg from "./ChooseImg";
import { roboto } from "@/constants/roboto";
export async function WhyChooseUs() {
  const whyChooseUs: any = await getTranslate("whyChooseUs");
  const features = whyChooseUs?.features;

  return (
    <section className="pb-8 md:pb-24 px-4 md:px-5 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Circular Image */}
        <ChooseImg whyChooseUs={whyChooseUs} />

        {/* Right: Content */}
        <div className="space-y-8">
          {/* Heading */}
          <div>
            <h1
              className="section-title"
              dangerouslySetInnerHTML={{
                __html: whyChooseUs.heading.replace(
                  /<highlight>(.*?)<\/highlight>/g,
                  `<span class="${roboto.className} text-primary">$1</span>`
                ),
              }}
            ></h1>
            <p className="section-subtitle">{whyChooseUs.subtitle}</p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature: any, index: number) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
