import PrimaryButton from "@/components/shared/PrimaryButton";
import { getTranslate } from "@/lib/helpers/getTranslate";
import { cookies } from "next/headers";
import React from "react";

export default async function LockerBanner() {
  const lang = (await cookies()).get("lang")?.value || "en";
  const translateData: any = await getTranslate("lockerBanner");
  // console.log(lang);
  return (
    <div
      style={{
        backgroundImage: "url('/assets/locker/locker-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
      className="lg:h-[450px] 2xl:h-[670px] container mb-10 rounded-[30px] flex flex-col items-center justify-center text-center overflow-hidden relative py-16"
    >
      <div className="bg-black/50 absolute h-full w-full z-10" />

      <div className="z-20">
        <h1
          data-aos="fade-up"
          data-aos-delay={100}
          className="section-title lg:text-[40px]! font-semibold! mb-4!"
          dangerouslySetInnerHTML={{ __html: translateData.title }}
        />

        <h6
          data-aos="fade-up"
          data-aos-delay={150}
          className="text-[#F1F1F1] leading-[148%] max-w-3xl"
        >
          {translateData.subtitle}
        </h6>

        <p
          data-aos="fade-up"
          data-aos-delay={150}
          className="leading-[148%] text-[#F1F1F1]/90 max-w-3xl mt-5 text-sm lg:text-base"
        >
          {translateData.description}
        </p>

        <a
          data-aos="fade-up"
          data-aos-delay={250}
          href={
            lang === "es"
              ? "https://viajialockers.drop-point.com/booking-engine?locker_ref=VIAJIALOCKERS1&locale=es"
              : "https://viajialockers.drop-point.com/booking-engine?locker_ref=VIAJIALOCKERS1&locale=en"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryButton
            text={translateData.button}
            size="large"
            className="lg:w-[200px] mt-10 font-medium!"
          />
        </a>
      </div>
    </div>
  );
}
