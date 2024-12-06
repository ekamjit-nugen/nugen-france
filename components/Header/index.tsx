"use client";
import { AlignJustify, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { PageContent } from "../Home";

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
}

const MainHeader: React.FC<NavBarPropsType> = ({ menu, header }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white border-gray-200 px-4 lg:px-6 py-2.5  h-20 pt-4 transition-shadow ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        <nav>
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img src={header?.logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            </a>
            <div className="flex items-center lg:order-2">
              <a
                onClick={() => router.push(header?.button_value)}
                className="text-black bg-[#6aebd3] hover:bg-[#6aebd3] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                {header?.button_title}
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer"
              >
                {mobileMenuOpen ? <X size={24} /> : <AlignJustify size={24} />}
              </button>
            </div>
            <div
              className={`${
                mobileMenuOpen ? "block" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 cursor-pointer">
                {menu?.map((items: NavBarProps) => (
                  <li key={items?.url + 1}>
                    <a
                      onClick={() => router.push(`${items?.url}`)}
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {items?.icons && (
                        <span className="mr-2">{items?.icons}</span>
                      )}
                      {items?.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
