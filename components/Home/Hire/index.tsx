"use client";
import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  leftToRightAnimation,
  rightToLeftAnimation,
  staggerParent,
} from "@/lib/animation/animationUtils";
import { QueryForm } from "@/components/QueryForms";
import { useLanguage } from "@/lib/common/useLanguage";
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
  const { language } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on initial render
  }, []);

  return (
    <motion.section
      {...staggerParent}
      className="p-4 bg-white *:w-full h-full md:text-left text-center overflow-x-hidden lg:shadow-2xl top-diagonal lg:py-8"
    >
      <div className={` relative items-start w-full h-full ${className}`}>
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full lg:pl-32 flex flex-col justify-center">
            <motion.div
              variants={leftToRightAnimation}
              className="font-bold text-black text-3xl lg:text-4xl"
            >
              {language === "fr"
                ? pageContentfr?.header_title
                : pageContent?.header_title}
            </motion.div>
            <motion.div
              variants={leftToRightAnimation}
              className="pt-8 w-full text-black"
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
