"use client";
import { AlignJustify, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { PageContent } from "../Home";
import { QueryForm } from "../QueryForms";
import { SWITCH_FR_FR } from "@/lib/language/fr";
import { SWITCH_FR_ENG } from "@/lib/language/en";

interface NavBarProps {
  header_title: string;
  header_description: string;
  animated_title: string;
  post_title: string;
  post_image: string;
  button_title: string;
  button_value: string;
  post_description: string;
  title: string;
  url: string;
  logo: string;
  icons?: string;
}
interface NavBarPropsType {
  menu: NavBarProps[];
  header: PageContent;
  headerFr: PageContent;
  menufr: NavBarProps[];
}

const MainHeader: React.FC<NavBarPropsType> = ({
  menu,
  header,
  headerFr,
  menufr,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("en");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    window.location.reload();
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white border-gray-200 px-4 lg:px-6 py-2.5 h-20 pt-4 transition-shadow ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        <nav>
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img
                src={language === "fr" ? headerFr?.logo : header?.logo}
                className="mr-3 h-12 "
                alt="Logo"
              />
            </a>
            <div className="flex items-center lg:order-2">
              <button
                onClick={toggleLanguage}
                className="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 lg:py-2.5 mr-2 focus:outline-none "
              >
                {language === "fr" ? SWITCH_FR_FR : SWITCH_FR_ENG}
              </button>
              <a className="hidden lg:block ">
                <QueryForm
                  buttonTitle={
                    language === "fr"
                      ? headerFr?.button_title
                      : header?.button_title
                  }
                />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-black rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
              >
                {mobileMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
              </button>
            </div>
            <div
              className={`${
                mobileMenuOpen
                  ? "block bg-gray-400 rounded-lg text-white"
                  : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transition-all duration-300`}
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 cursor-pointer">
                {(language === "fr" ? menufr : menu)?.map(
                  (items: NavBarProps) => (
                    <li key={items?.url + 1}>
                      <a
                        onClick={() => router.push(`${items?.url}`)}
                        className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                      >
                        {items?.icons && (
                          <span className="mr-2 text-xl">{items?.icons}</span>
                        )}
                        {items?.title}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
