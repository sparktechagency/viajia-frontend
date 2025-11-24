import React from "react";
import LockerBanner from "./sections/LockerBanner";
import PricingSection from "./sections/sizes-section/Pricing/PricingSection";
import WhatIsViajia from "./sections/sizes-section/WhatIsViajia";
import { getTranslate } from "@/lib/helpers/getTranslate";
import LocationHours from "../home/sections/LocationHours";

export default async function LockersPage() {
  const location: any = await getTranslate("hoursSupport");
  const locationHeading: any = await getTranslate("locationSection");

  return (
    <div className="mt-24">
      <section className="mx-4 lg:mx-5">
        <LockerBanner />
      </section>
      <WhatIsViajia />
      <PricingSection />
      <LocationHours t={location} locationHeading={locationHeading} />
      {/* <HoursSupport /> */}
    </div>
  );
}
