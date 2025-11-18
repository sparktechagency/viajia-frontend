import React from "react";
import Banner from "./sections/banner/Banner";
import { WhyChooseUs } from "./sections/why-choose-us/WhyChooseUs";
import { ViajiaSpecialty } from "./sections/ViajiaSpecialty";
import FAQSection from "./sections/FAQ";
import { MarketingSection } from "./sections/MarketingSection";
import TravelCTA from "./sections/TravelCTA";
import { getTranslate } from "@/lib/helpers/getTranslate";
import LocationHours from "./sections/LocationHours";

export default async function HomePageMain() {
  const faqData: any = await getTranslate("faq");
  const faqTitle: any = await getTranslate("faqTitle");
  const location: any = await getTranslate("hoursSupport");
  const locationHeading: any = await getTranslate("locationSection");
  console.log(location);

  const items = faqData.map((item: any, index: number) => ({
    key: String(index + 1),
    label: item.question,
    children: <p>{item.answer}</p>,
  }));

  return (
    <section>
      <Banner translateData={await getTranslate("banner")} />
      <WhyChooseUs />
      <ViajiaSpecialty />
      <MarketingSection />
      <TravelCTA />
      <LocationHours t={location} locationHeading={locationHeading} />
      <FAQSection items={items} faqTitle={faqTitle} />
    </section>
  );
}
