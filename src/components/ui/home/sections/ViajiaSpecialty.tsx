import { roboto } from "@/constants/roboto";
import { getTranslate } from "@/lib/helpers/getTranslate";
import Image from "next/image";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

export async function ViajiaSpecialty() {
  const translateData: any = await getTranslate("viajiaSpecialty");
  // console.log(translateData);
  return (
    <section className="py-8 md:py-12 px-4 md:px-5 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center justify-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1
            className="section-title text-white max-w-[600px]"
            dangerouslySetInnerHTML={{
              __html: translateData.heading.replace(
                /<highlight>(.*?)<\/highlight>/g,
                `<span class="${roboto.className} text-primary">$1</span>`
              ),
            }}
          ></h1>

          <p className="section-subtitle mb-8">
            {/* {t("viajiaSpecialty.subtitle")} */}
            {translateData.subtitle}
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-wrap gap-4 justify-center items-center lg:justify-start">
            <a
              data-aos="zoom-in-up"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 transition-colors"
            >
              <FaGooglePlay className="text-xl" />

              <span className="text-white font-medium">Google Play</span>
            </a>

            <a
              data-aos="zoom-in-up"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 transition-colors"
            >
              <FaAppStoreIos className="text-xl" />

              <span className="text-white font-medium">App Store</span>
            </a>
          </div>
        </div>

        {/* Right - Phone Mockups */}
        <div className=" h-96 md:h-full flex items-center  justify-end">
          <Image
            src={"/assets/home/speciality.png"}
            alt="phone"
            width={1500}
            height={1500}
            unoptimized
            className="w-full lg:w-[90%] h-fit  object-fit"
          />
        </div>
      </div>
    </section>
  );
}
