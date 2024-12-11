"use client";
import Button from "@/components/ui/ButtonNugen/butoon";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  leftToRightAnimation,
  rightToLeftAnimation,
  staggerParent,
  topToBottomAnimation,
} from "@/lib/animation/animationUtils";
import Link from "next/link";

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
    <motion.div
      {...staggerParent}
      className="mx-auto bg-white text-center px-60"
    >
      <div>
        <motion.div
          variants={topToBottomAnimation}
          className="text-black text-lg uppercase font-semibold flex items-center justify-center mb-6"
        >
          <span className="w-12 h-[2px] bg-[#6aebd3] inline-block mr-4"></span>
          {language === "fr" ? "Dernières Réussites" : "Latest Achievements"}
          <span className="w-12 h-[2px] bg-[#6aebd3] inline-block ml-4"></span>
        </motion.div>
      </div>

      {/* Map Dynamic Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
        {(language === "fr" ? datafr : data)
          .slice(0, 6)
          .map((achievement, index) => (
            <Link
              key={achievement.button_value + index + 3}
              href={`/Projects?id=${achievement?.button_value}`}
              style={{ textDecoration: "none" }}
            >
              <div
                key={index}
                className="relative group w-full h-full overflow-hidden rounded-lg shadow-md"
              >
                <motion.img
                  variants={leftToRightAnimation}
                  src={achievement?.post_image}
                  className="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
                  alt={achievement?.post_title}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-3 px-4 group-hover:bg-white transition-all duration-300 text-black rounded-b-lg">
                  <motion.div
                    variants={leftToRightAnimation}
                    className="font-bold text-xl"
                  >
                    {achievement?.post_title}
                  </motion.div>
                  <motion.p
                    variants={rightToLeftAnimation}
                    className="text-sm mt-2"
                  >
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
        <Link href={language === "fr" ? buttonDataFr?.button_value || "" : buttonData?.button_value || ""}>
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
