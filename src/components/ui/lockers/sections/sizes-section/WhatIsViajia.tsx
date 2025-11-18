import { getTranslate } from "@/lib/helpers/getTranslate";
import React from "react";

export default async function WhatIsViajia() {
  const translateData: any = await getTranslate("whatIsViajia");
  return (
    <section className="container pt-16 lg:pt-20">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-12">
          <h1 className="section-title lg:text-[40px]! font-semibold!  text-balance">
            {translateData.title}
          </h1>
          <p className="section-subtitle lg:text-base!  leading-relaxed">
            {translateData.description}
          </p>
        </div>
      </div>
    </section>
  );
}
