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

interface homeBoxData {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  button_title: string;
  post_title: string;
  post_image: string;
  post_description: string;
  post_icon: string;
}
interface dataType {
  data: homeBoxData[];
  datafr: homeBoxData[];
}

const CallToAction = ({ data, datafr }: dataType) => {
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
      className="relative flex items-center justify-center py-24 text-gray-900"
    >
      <div className="text-center px-4 md:px-8 text-white z-30">
        <motion.div
          variants={leftToRightAnimation}
          className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug md:leading-tight lg:leading-snug"
        >
          {language === "fr"
            ? datafr?.[0].header_title
            : data?.[0].header_title}
        </motion.div>
        <motion.div variants={topToBottomAnimation}>
          <Link href={data?.[0].button_value}>
            <Button
              title={
                language === "fr"
                  ? datafr?.[0].button_title
                  : data?.[0].button_title
              }
              className="mb-4 sm:mb-0 sm:mx-2"
            />
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-90  "
        style={{
          backgroundImage:
            "url('https://i.ibb.co/0cDdNfv/gradient-abstract-wireframe-background-23-2149009903-1.jpg')",
        }}
      />
    </motion.div>
  );
};

export default CallToAction;
