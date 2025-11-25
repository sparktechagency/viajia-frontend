import { getTranslate } from "@/lib/helpers/getTranslate";
import { Button } from "antd";

import Link from "next/link";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

export default async function Footer() {
  const translateData: any = await getTranslate("footer");
  const links = [
    { label: translateData.links.about, href: "/about" },
    { label: translateData.links.contact, href: "/contact" },
    { label: translateData.links.privacy, href: "/privacy-policy" },
    { label: translateData.links.terms, href: "/terms-condition" },
  ];
  return (
    <footer
      // style={{
      //   backgroundImage: "url('/assets/footer/footer-bg.svg')",
      //   backgroundRepeat: "no-repeat",
      // }}
      className="bg-[#00BCD1] text-black pt-12  md:px-16 font-sans"
    >
      <div className="container mx-auto flex flex-col gap-10">
        {/* Top box with glass effect */}
        <div className="backdrop-blur-md bg-white/10 border border-[#00BCD133] rounded-lg px-4 py-6 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <p className="text-lg md:text-xl font-medium text-[#1A1B1B] text-center md:text-left">
            {translateData.description}
          </p>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/30 pt-6">
          {/* Left links */}
          <div className="flex flex-wrap gap-4 lg:gap-6 text-xs lg:text-sm text-black/80 mb-4 md:mb-0 items-center justify-center lg:justify-start">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-black font-medium "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right section - App buttons */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="text-lg text-black/80 font-medium">
              {translateData.getApp}
            </span>
            <div className="flex gap-3">
              <Button
                icon={<FaGooglePlay className="text-xl" />}
                className="bg-black! text-white! border-none! hover:bg-gray-800! h-12!"
              >
                {translateData.googlePlay}
              </Button>
              <Button
                icon={<FaAppStoreIos className="text-xl" />}
                className="bg-black! text-white! border-none! hover:bg-gray-800! h-12!"
              >
                {translateData.appStore}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-center md:text-left text-sm text-black/70 border-t border-white/30 py-4">
          {translateData.copyright}
        </div>
      </div>
    </footer>
  );
}
