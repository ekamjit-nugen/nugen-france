"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  leftToRightAnimation,
  staggerParent,
  topToBottomAnimation,
} from "@/lib/animation/animationUtils";
import Link from "next/link";
import Button from "@/components/ui/ButtonNugen/butoon";
import { LATEST_ACHIEVMENTS_ENG } from "@/lib/language/en";
import { LATEST_ACHIEVMENTS_FR } from "@/lib/language/fr";

export interface dataType {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  post_title: string;
  post_image: string;
  post_description: string;
  button: string;
  url?: string;
  url_value?:string;
}

export interface AchievementType {
  data: dataType[];
  datafr: dataType[];
  buttonData?: dataType;
  buttonDataFr?: dataType;
}

const Achievements: React.FC<AchievementType> = ({
  data,
  datafr,
  buttonData,
  buttonDataFr,
}) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  return (
    <motion.div {...staggerParent} className="bg-white pt-16 pb-20">
      <motion.div
        variants={topToBottomAnimation}
        className="text-black lg:text-4xl text-xl uppercase font-semibold flex items-center justify-center text-center mb-6"
      >
        <span className="w-12 h-[2px] bg-[#6aebd3] inline-block mr-4 "></span>
        {language === "fr" ? LATEST_ACHIEVMENTS_FR : LATEST_ACHIEVMENTS_ENG}
        <span className="w-12 h-[2px] bg-[#6aebd3] inline-block ml-4"></span>
      </motion.div>
      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {(language === "fr" ? datafr : data)
          ?.slice(0, 9)
          ?.map((achievement, index) => (
            <Link
              key={achievement.button_value + index}
              href={`/Projects?id=${achievement?.button_value}`}
              className="relative group"
              style={{ textDecoration: "none" }}
            >
              <div
                key={index}
                className="relative group w-full h-full overflow-hidden rounded-lg shadow-inner"
              >
                <motion.img
                  variants={leftToRightAnimation}
                  src={achievement?.post_image}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  alt={achievement?.post_title}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-3 px-4 group-hover:bg-white transition-all duration-300 text-black rounded-b-lg">
                  <motion.div
                    variants={leftToRightAnimation}
                    className="font-bold text-xl"
                  >
                    {achievement?.post_title}
                  </motion.div>
                  <motion.p variants={topToBottomAnimation} className="text-lg">
                    {achievement?.post_description}
                  </motion.p>
                </div>
                <span className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-t-lg transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-b-lg transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute top-0 left-0 h-0 w-[2px] bg-gradient-to-b from-pink-600 via-purple-600 to-blue-600 rounded-l-lg transition-all duration-300 group-hover:h-full"></span>
                <span className="absolute top-0 right-0 h-0 w-[2px] bg-gradient-to-b from-pink-600 via-purple-600 to-blue-600 rounded-r-lg transition-all duration-300 group-hover:h-full"></span>
              </div>
            </Link>
          ))}
      </div>

      {/* See All Button */}
      <motion.div
        variants={leftToRightAnimation}
        className="flex justify-center py-8"
      >
        <Link
          href={
            language === "fr"
              ? buttonDataFr?.url_value || ""
              : buttonData?.url_value || ""
          }
        >
          <Button
            title={
              language === "fr"
                ? buttonDataFr?.button || ""
                : buttonData?.button || ""
            }
            className="mb-4 sm:mb-0 sm:mx-2"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Achievements;
