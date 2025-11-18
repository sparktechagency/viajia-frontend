import React from "react";
import InfoCard from "../Info/InfoCard";
import HoursList from "../Info/HoursList";
import { Clock, Phone, Mail, Settings } from "lucide-react";
import { getTranslate } from "@/lib/helpers/getTranslate";
export default async function HoursSupport() {
  const t: any = await getTranslate("hoursSupport");
  return (
    <div className="grid md:grid-cols-2 gap-8 pt-10 pb-20 container">
      {/* Hours */}
      <InfoCard
        title={t.hoursTitle}
        icon={<Clock className="w-5 h-5" />}
        delay={100}
      >
        <HoursList t={t} />
      </InfoCard>

      {/* Support */}
      <InfoCard
        title={t.supportTitle}
        icon={<Settings className="w-5 h-5" />}
        delay={200}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className=" bg-[#45EA69]/30 p-3 rounded-full">
              <Phone className="w-4 h-4 text-[#45EA69]" />
            </div>
            <div>
              <p className="text-[#ABABAB]  mb-1">{t.satLabel}</p>
              <p className="text-primary flex items-center gap-2 text-sm">
                +34 640753793
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className=" bg-[#FFCB20]/30 p-3 rounded-full">
              <Mail className="w-4 h-4 text-[#FFCB20]" />
            </div>
            <div>
              <p className="text-[#ABABAB]  mb-1">{t.emailLabel}</p>
              <p className="text-primary flex items-center gap-2 text-sm">
                contacto@viajia.es
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className=" bg-[#F66E10]/30 p-3 rounded-full">
              <Clock className="w-4 h-4 text-[#F66E10]" />
            </div>
            <div>
              <p className="text-[#ABABAB]  mb-1">{t.supportHoursLabel}</p>
              <p className="text-primary flex items-center gap-2 text-sm">
                {t.supportHoursValue}
              </p>
            </div>
          </div>
        </div>
      </InfoCard>
    </div>
  );
}
