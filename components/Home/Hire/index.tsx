"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  leftToRightAnimation,
  rightToLeftAnimation,
  staggerParent,
  topToBottomAnimation,
} from "@/lib/animation/animationUtils";
import { QueryForm } from "@/components/QueryForms";
interface ServiceContentType {
  header_title: string;
  header_description: string;
  animated_title?: string;
  button_value?: string;
  hr_email?: string;
  image: string | StaticImageData;
  button_title?: string;
}
interface ServiceClientsProps {
  className?: string;
  image?: string | StaticImageData;
  pageContent?: ServiceContentType;
  pageContentfr?: ServiceContentType;
}
const InterestedSection: React.FC<ServiceClientsProps> = ({
  className,
  pageContent,
  image,
  pageContentfr,
}) => {
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
    <motion.section
      {...staggerParent}
      className=" bg-white *:w-full h-full overflow-x-hidden lg:shadow-2xl top-diagonal lg:py-16"
    >
      <div className={` relative items-start w-full h-full ${className}`}>
        <div className="w-full p-8 flex flex-col md:flex-row">
          <div className="w-full lg:pl-32 flex flex-col justify-center">
            <motion.div
              variants={leftToRightAnimation}
              className="font-serif text-black text-3xl lg:text-4xl"
            >
              {language === "fr"
                ? pageContentfr?.header_title
                : pageContent?.header_title}
            </motion.div>
            <motion.div
              variants={leftToRightAnimation}
              className="pt-8 w-[80%] text-black"
            >
              {language === "fr"
                ? pageContentfr?.header_description
                : pageContent?.header_description}
            </motion.div>
            <motion.div
              variants={leftToRightAnimation}
              className="flex justify-start pt-4"
              id=""
            >
              <QueryForm
                buttonTitle={
                  language === "fr"
                    ? pageContentfr?.button_title || ""
                    : pageContent?.button_title || ""
                }
              />
            </motion.div>
          </div>
          <motion.div
            variants={rightToLeftAnimation}
            className="h-full w-full lg:-mt-12 flex justify-start "
          >
            <Image
              src={
                language === "fr"
                  ? pageContentfr?.image || ""
                  : pageContent?.image || ""
              }
              alt="image"
              height={650}
              width={650}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default InterestedSection;
