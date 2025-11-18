import React from "react";

export default function LockerBanner() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/locker/locker-img.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
      className="h-[670px] container mb-20 rounded-[30px] flex flex-col items-center justify-center "
    >
      <h1 className="section-title text-[40px]! font-semibold! mb-2!">
        Travel Light, Enjoy More
      </h1>
      <h6 className="text-[#F1F1F1] leading-[148%]">
        Secure luggage storage in the heart of Oviedo.
      </h6>
    </div>
  );
}
