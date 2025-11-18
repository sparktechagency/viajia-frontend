import { FEATURES } from "@/constants/features";
import React from "react";

export default function FeatureCard({ feature, index }: any) {
  return (
    <div
      data-aos="zoom-in-up"
      className={`${
        index === 0 ? "bg-[#1C1C1E] rounded-xl shadow-2xl" : ""
      } p-4 flex gap-4`}
    >
      <div
        className={`text-3xl shrink-0 flex items-center justify-center h-full ${
          index === 0 ? "bg-[#0A0B0D]" : "bg-[#1C1C1E]"
        } p-3 rounded-2xl`}
      >
        {FEATURES[index]?.icon}
      </div>
      <div>
        <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
        <p className="text-gray-400 text-sm">{feature.description}</p>
      </div>
    </div>
  );
}
