"use client";
import Button from "@/components/ui/ButtonNugen/butoon";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  leftToRightAnimation,
  staggerParent,
  topToBottomAnimation,
} from "@/lib/animation/animationUtils";
import Link from "next/link";
import { useLanguage } from "@/lib/common/useLanguage";

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
  first?: homeBoxData;
  second?: homeBoxData;
  firstFr?: homeBoxData;
  secondFr?: homeBoxData;
}

const CallToAction = ({
  data,
  datafr,
  firstFr,
  secondFr,
  first,
  second,
}: dataType) => {
  const { language } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on initial render
  }, []);

  const currentData = language === "fr" ? firstFr || secondFr : first || second;

  return (
    <motion.div
      {...staggerParent}
      className="relative flex items-center justify-center py-24 text-gray-900"
    >
      <div className="text-center px-4 md:px-8 text-white z-30">
        <motion.div
          variants={leftToRightAnimation}
          className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug md:leading-tight lg:leading-snug pt-4"
        >
          {currentData?.header_title}
        </motion.div>
        <motion.div className="pt-5" variants={topToBottomAnimation}>
          <Link href={currentData?.button_value || ""}>
            <Button
              title={currentData?.button_title || ""}
              className="mb-4 sm:mb-0 sm:mx-2"
            />
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/0cDdNfv/gradient-abstract-wireframe-background-23-2149009903-1.jpg')",
        }}
      />
    </motion.div>
  );
};

export default CallToAction;
