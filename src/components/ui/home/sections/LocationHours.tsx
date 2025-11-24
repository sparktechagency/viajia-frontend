"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import InfoCard from "../../lockers/sections/sizes-section/Info/InfoCard";
import { Clock, Mail, Phone } from "lucide-react";
import HoursList from "../../lockers/sections/sizes-section/Info/HoursList";

const markerIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function LocationHours({ t, locationHeading }: any) {
  // console.log(t);
  const lat = 43.36605;
  const lng = -5.85415;

  return (
    <section className="py-16 lg:py-20 lg:pb-40  text-[#F1F1F1]">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl 2xl:text-[28px] font-semibold">
          {locationHeading?.title}
        </h2>
        <p className="text-[#ABABAB] mt-3 lg:text-lg">
          {locationHeading?.address}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-8 container items-center mx-auto">
        {/* MAP */}
        <div className="w-full h-[300px] lg:h-[380px] rounded-xl overflow-hidden shadow-lg">
          <MapContainer
            center={[lat, lng]}
            zoom={250}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[lat, lng]} icon={markerIcon}>
              <Popup>Your Location</Popup>
            </Marker>
          </MapContainer>
        </div>
        {/* Opening Hours Card */}
        <div>
          <InfoCard
            title={t?.hoursTitle}
            icon={<Clock className="w-5 h-5" />}
            delay={100}
            isHome={false}
          >
            <HoursList t={t} />
          </InfoCard>
          <div
            data-aos="fade-up"
            data-aos-delay={150}
            className="mt-6 flex flex-col md:flex-row lg:items-center gap-4 lg:gap-8"
          >
            <div className="flex items-center gap-3 ">
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
        </div>
      </div>
    </section>
  );
}
