"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import navItems from "@/constants/navItem";
import Link from "next/link";
import { Button, Dropdown, Drawer, ConfigProvider } from "antd";
import LanguagePanel from "./LanguagePanel";
import { LANGUAGES } from "@/constants/language";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
export default function Navbar({ t }: any) {
  const pathname = usePathname();
  const cookieLang = Cookies.get("lang");
  const [language, setLanguage] = useState<"en" | "es">(
    (cookieLang as any) || "es"
  );

  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentLang = useMemo(
    () => LANGUAGES.find((l) => l.key === language) ?? LANGUAGES[0],
    [language]
  );

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      const scrollY = globalThis.scrollY;
      // console.log("scroll", scrollY);
      // Change navbar background after banner
      setIsScrolled(scrollY > bannerHeight - 80);

      // Hide/show logic
      if (scrollY > lastScrollTop.current && scrollY > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY; 
    };

    globalThis.addEventListener("scroll", handleScroll);
    // console.log("inside");
    return () => globalThis.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = document.getElementById("banner")?.offsetHeight || 0;
      if (window.scrollY > bannerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [cookieLang]);

  // handle language change
  const handleLanguageChange = async (lang: "en" | "es") => {
    // console.log(lang);
    setLanguage(lang);
    // i18n.changeLanguage(lang);
    Cookies.set("lang", lang);
    router.refresh();
    // globalThis.location.reload();
  };

  return (
    <nav
      className={`fixed top-0  z-50 w-full transition-all duration-500 navbar-container 
        ${
          isScrolled
            ? "bg-black mt-0"
            : "bg-transparent lg:bg-transparent md:px-8 2xl:px-0  lg:backdrop-blur-none mt-6  lg:mt-10 "
        }
        ${showNavbar ? "translate-y-0" : "-translate-y-28"}
      `}
    >
      <div
        className={`container mx-auto px-4  py-4 transition-colors duration-300`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={'/'} className="shrink-0 -mt-2">
            <Image
              src="/Logo.png"
              alt="VIAJIA Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm transition-all duration-300 ${
                  item.href === pathname
                    ? "relative font-semibold px-8 py-2 rounded-full text-white bg-[#00BCD1]/20 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : "text-slate-300 hover:text-cyan-400"
                }`}
                style={{
                  backdropFilter:
                    item.href === pathname
                      ? "blur(10px) saturate(120%)"
                      : "none",
                  WebkitBackdropFilter:
                    item.href === pathname
                      ? "blur(10px) saturate(120%)"
                      : "none",
                }}
              >
                {t[item.labelKey]}
              </Link>
            ))}
          </div>

          {/* Right Section - Language + Download + Menu */}
          <div className="flex items-center gap-4">
            {/* Language */}
            <Dropdown
              trigger={["click"]}
              popupRender={() => (
                <LanguagePanel
                  selected={language}
                  onSelect={handleLanguageChange}
                />
              )}
            >
              <Button type="text" className="flex gap-2 rounded-xl px-3 py-2">
                <div className="flex items-center gap-2">
                  <img
                    src={currentLang.flag}
                    alt={`${currentLang.label} flag`}
                    className="h-5 w-7 rounded-sm object-cover"
                  />
                  <span className="text-white hidden lg:block">
                    {currentLang.label}
                  </span>
                </div>
                <DownOutlined className="text-white! lg:mt-1" />
              </Button>
            </Dropdown>

            {/* Download Button (Hidden on Small Devices) */}
            <button className="hidden lg:block bg-[#00BCD1] text-white px-6 py-2 rounded-full transition-colors text-sm">
              Download App
            </button>

            {/* Mobile Menu Icon */}
            <button
              className="lg:hidden text-white text-xl"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <ConfigProvider
        theme={{
          components: {
            Drawer: {
              colorBgElevated: "#171717",
              colorText: "rgba(255,255,255,0.88)",
            },
          },
        }}
      >
        <Drawer
          title={
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">{t.menu}</span>
              {/* <CloseOutlined onClick={() => setDrawerOpen(false)} /> */}
            </div>
          }
          placement="right"
          width={280}
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          styles={{
            body: {
              background: "#0B0C10",
              color: "#fff",
            },
          }}
        >
          <div className="flex flex-col gap-6 mt-4">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${
                  item.href === pathname
                    ? "relative font-semibold pl-4 -ml-4 py-2 rounded-lg text-white! bg-[#00BCD1]/20! backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    : "text-white! hover:text-cyan-400"
                } text-base   transition-all`}
                onClick={() => setDrawerOpen(false)}
              >
                {t[item.labelKey]}
              </Link>
            ))}

            {/* Download Button */}
            <button className="bg-[#00BCD1] text-white px-6 py-2 rounded-full transition-colors text-sm w-full">
              Download App
            </button>
          </div>
        </Drawer>
      </ConfigProvider>
    </nav>
  );
}
