import { getTranslate } from "@/lib/helpers/getTranslate";
import { Button } from "antd";
import { MessageCircle, Sparkles } from "lucide-react";
import ModalButton from "./ModalButton";

export default async function TravelCTA() {
  const t: any = await getTranslate("travelCTA");
  return (
    <section className="  px-4 md:px-5 container mx-auto  md:mb-12">
      <div className="w-full space-y-8 text-center bg-[#1C1C1E] rounded-2xl px-4 md:px-5 py-8 md:py-12">
        {/* Top Button */}
        <div className="flex justify-center">
          <Button
            type="text"
            size="large"
            className="border-[#FFCB20]! text-[#FFCB20]! hover:text-yellow-400 hover:border-yellow-400 rounded-full! px-6 lg:px-10! font-medium h-auto lg:h-14! bg-[#FFCB20]/15! cursor-auto! text-xs! lg:text-base!"
            icon={<Sparkles size={16} />}
          >
            {t.badge}
          </Button>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-semibold bg-linear-to-r from-[#F1F1F1] via-[#00BCD1] to-[#F1F1F1] bg-clip-text text-transparent">
            {t.heading}
          </h1>

          {/* Subheading */}
          <p className="section-subtitle max-w-xl mx-auto">{t.subheading}</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="large"
            className="bg-primary! hover:bg-cyan-600! border-0! text-white! font-semibold! rounded-lg! px-8! h-12! w-full! lg:w-auto!"
            icon={<MessageCircle size={18} />}
          >
            {t.button1}
          </Button>

          <Button
            size="large"
            className="bg-[#0A0B0D]! border-0! text-primary! font-semibold! rounded-lg! w-full! lg:w-auto! lg:px-8! h-12!"
          >
            {t.button2}
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="space-y-3 pt-6">
          <p className="section-subtitle text-lg!">{t.trustLine1}</p>
          <p className="section-subtitle">{t.trustLine2}</p>
        </div>
      </div>
    </section>
  );
}
