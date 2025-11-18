import React from "react";
import LockerBanner from "./sections/LockerBanner";
import PricingSection from "./sections/sizes-section/Pricing/PricingSection";
import WhatIsViajia from "./sections/sizes-section/WhatIsViajia";
import HoursSupport from "./sections/sizes-section/Info/HoursSupport";

export default function LockersPage() {
  return (
    <div className="mt-24">
      <section className="mx-4 lg:mx-5">
        <LockerBanner />
      </section>
      <WhatIsViajia />
      <PricingSection />
      <HoursSupport />
    </div>
  );
}
