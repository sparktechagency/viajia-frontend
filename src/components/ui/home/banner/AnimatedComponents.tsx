import { PHOTO_CARDS } from "@/constants/photoCard";
import Image from "next/image";

import { Button } from "antd";

const AnimatedPhotos = () => {
  return (
    <div className="relative z-10 flex justify-center mb-4 lg:mb-10 pt-0 lg:pt-6  2xl:pt-0">
      <div className="relative w-60 sm:w-[300px] h-[90px]">
        <div
          data-aos="fade-right"
          className="absolute left-2 top-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white shadow-lg rotate-[-10deg]"
        >
          <Image
            src={PHOTO_CARDS[0].src}
            alt={PHOTO_CARDS[0].alt}
            fill
            draggable={false}
            className="object-cover"
            priority
          />
        </div>
        <div
          data-aos="fade-down"
          className="absolute left-1/2 -translate-x-1/2 -top-2 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white shadow-lg  z-10"
        >
          <Image
            src={PHOTO_CARDS[1].src}
            alt={PHOTO_CARDS[1].alt}
            fill
            draggable={false}
            className="object-cover"
          />
        </div>
        <div
          data-aos="fade-left"
          className="absolute right-2 top-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white shadow-lg rotate-10"
        >
          <Image
            src={PHOTO_CARDS[2].src}
            alt={PHOTO_CARDS[2].alt}
            fill
            draggable={false}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

// cta buttons
const CTAButtons = ({ translateData }: any) => {
  return (
    <>
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center w-full">
        <Button
          style={{ boxShadow: "0 6px 20px rgba(255, 203, 32, 0.5)" }}
          data-aos="fade-up"
          size="large"
          className="bg-[#FFCB20]! hover:bg-yellow-500! border-none! text-slate-900! font-semibold!  h-12! rounded-xl w-full! md:w-[220px]!"
        >
          <span className="text-black! text-xl">✦</span>{" "}
          {translateData.cta.talkToValeria}
        </Button>
        <Button
          size="large"
          type="default"
          data-aos="fade-up"
          className="border! border-primary! text-primary! hover:bg-cyan-400/10 font-semibold! h-12! rounded-xl bg-[#00BCD126]! w-full! md:w-[220px]!"
        >
          {translateData?.cta.createItinerary}
        </Button>
      </div>
    </>
  );
};

export { AnimatedPhotos, CTAButtons };
