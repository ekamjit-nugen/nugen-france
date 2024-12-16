"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import HeroImageSVGRight from "../svgContainer/HeroImageSVGRight";
import useSize from "../windowSize";
import HeroImageSVG from "../svgContainer/HeroImageSVG";
import { Tween } from "react-gsap";
import { motion } from "framer-motion";
import {
  leftToRightAnimation,
  staggerParent,
  topToBottomAnimation,
} from "@/lib/animation/animationUtils";
export interface PageContent {
  header_title: string;
  header_description: string;
  animated_title: string;
  // button_value?: () => void;
  button_value: string;
  underline_text?: string;
  button_title: string;
  "img-1"?: string;
  "img-2"?: string;
  url: string;
  logo: any;
  url_text: string;
  image: any;
}

export interface homeBoxData {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  button_title: string;
  post_title: string;
  post_image: undefined;
  post_description: string;
  post_icon: string;
  url?: string;
}
export interface buttonDataType {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  button_title: string;
  post_title: string;
  post_image: undefined;
  post_description: string;
  post_icon: string;
  url?: string;
}
export interface PageProps {
  homePagedata: PageContent;
  buttonData: buttonDataType[];
  buttonDatafr: buttonDataType[];
  homeBoxData: homeBoxData[];
  homePagedatafr: PageContent;
  homeBoxDataFr: homeBoxData[];
}
const HomePage: React.FC<PageProps> = ({
  homePagedata,
  buttonData,
  buttonDatafr,
  homeBoxData,
  homePagedatafr,
  homeBoxDataFr,
}) => {
  const t = useTranslations("home");
  const size = useSize();
  const [language, setLanguage] = useState("en");

  const langData = async () => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  };
  useEffect(() => {
    langData();
  }, [langData]);

  return (
    <motion.div
      {...staggerParent}
      className="bg-white w-full min-h-screen text-black"
    >
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center py-20 px-8 md:px-16">
        {/* Left Side: Text Content */}
        <div className="text-2xl md:text-2xl z-10 font-bold flex-1">
          <motion.div
            variants={leftToRightAnimation}
            className="underline decoration-[#6aebd3] underline-offset-2"
          >
            {language === "fr"
              ? homePagedatafr?.underline_text
              : homePagedata?.underline_text}
          </motion.div>

          <motion.div variants={leftToRightAnimation}>
            {language === "fr"
              ? homePagedatafr?.header_title
              : homePagedata?.header_title}
          </motion.div>

          <motion.div
            variants={leftToRightAnimation}
            className="mt-6 text-base md:text-lg font-medium"
          >
            <p key={language}>
              {language === "fr"
                ? homePagedatafr?.header_description
                : homePagedata?.header_description}
            </p>
          </motion.div>

          <motion.div
            variants={leftToRightAnimation}
            className="mt-6 relative flex flex-wrap "
          >
            {(language === "fr" ? buttonDatafr : buttonData)?.map(
              (value, index) => (
                <Link
                  key={value?.button_value + index}
                  href={value?.button_value}
                >
                  <button className="relative inline-block bg-[#87f9e4] text-black py-3 px-6 rounded-lg overflow-hidden text-lg font-semibold transition-all duration-300 group w-full sm:w-auto mb-4 sm:mb-0 sm:mx-2">
                    <span className="absolute inset-0 bg-[#6aebd3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    <span className="relative z-10">{value?.button_title}</span>
                  </button>
                </Link>
              )
            )}
          </motion.div>
        </div>
        <div className="absolute top-48 opacity-60">
          <BackgroundSVG />
        </div>
        <div className="absolute -top-16 hidden lg:block">
          <HeroImageSVG width={size && size < 800 ? "303" : "500"} />
        </div>
        <div className="flex-1 mt-8 md:mt-0 lg:block hidden">
          {size && size > 1024 && (
            <div className="w-min h-full scale-y-100 md:scale-150 md:py-8  lg:scale-125 py-8 lg:pt-16 lg:flex">
              <HeroImageSVGRight width={size && size < 1024 ? "380" : "520"} />
            </div>
          )}
        </div>
      </div>

      {/* Section 2: Three Columns */}
      <div className="bg-white px-8 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(language === "fr" ? homeBoxDataFr : homeBoxData)?.map(
            (value, index) => {
              return (
                <>
                  <Link
                    href={value?.button_value || "/"}
                    key={value?.post_title}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="p-4 bg-white hover:bg-[#87f9e4] rounded-lg  shadow-inner text-center transition-all duration-300 h-[500px] flex flex-col">
                      <motion.div
                        variants={topToBottomAnimation}
                        className="text-blue-500 text-6xl"
                      >
                        {value?.post_icon}
                      </motion.div>
                      <motion.h3
                        variants={topToBottomAnimation}
                        className="text-2xl font-bold"
                      >
                        {value?.post_title}
                      </motion.h3>
                      <motion.p
                        variants={leftToRightAnimation}
                        className="text-clip overflow-hidden"
                      >
                        {value?.post_description
                          ?.split(" ")
                          .slice(0, 125)
                          .join(" ") +
                          (value?.post_description?.split(" ").length > 50
                            ? "..."
                            : "")}
                      </motion.p>
                    </div>
                  </Link>
                </>
              );
            }
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;

const BackgroundSVG = () => (
  <svg
    width="auto"
    height="300"
    viewBox="0 0 729 637"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Tween
      from={{
        svgDraw: 0,
      }}
      to={{
        svgDraw: 1,
      }}
      duration={2}
      delay={0.2}
    >
      <path
        opacity="0.2"
        d="M528.5 176.5H329.5V0.5H528.5V176.5ZM129.5 0.5H328.5V176.5H129.5V0.5ZM128.5 0.5V176.5H-70.5V0.5H128.5ZM529.5 0.5H728.5V176.5H529.5V0.5ZM529.5 177.5H728.5V319.5H529.5V177.5ZM529.5 320.5H728.5V399.5H529.5V320.5ZM529.5 400.5H728.5V639.5H529.5V400.5ZM528.5 400.5V639.5H329.5V400.5H528.5ZM328.5 400.5V639.5H129.5V400.5H328.5ZM128.5 400.5V639.5H-70.5V400.5H128.5ZM128.5 399.5H-70.5V320.5H128.5V399.5ZM129.5 399.5V320.5H328.5V399.5H129.5ZM329.5 399.5V320.5H528.5V399.5H329.5ZM-70.5 177.5H128.5V319.5H-70.5V177.5Z"
        stroke="url(#paint0_radial_13_2789)"
        color="currentColor"
      />
      <defs>
        <radialGradient
          id="paint0_radial_13_2789"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(329 320) rotate(90) scale(328 388.755)"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
      </defs>
    </Tween>
  </svg>
);
