"use client";
import Button from "@/components/ui/ButtonNugen/butoon";
import React from "react";
import { PageContent } from "..";
import { motion } from "framer-motion";
import {
  leftToRightAnimation,
  rightToLeftAnimation,
  staggerParent,
  topToBottomAnimation,
} from "@/lib/animation/animationUtils";

export type PageProps = {
  aboutPagedata: PageContent;
};

const About: React.FC<PageProps> = ({ aboutPagedata }) => {
  return (
    <motion.div
      {...staggerParent}
      className="flex flex-col md:flex-row items-center justify-center px-6 py-10 md:px-16 md:py-24 min-h-screen"
    >
      {/* Left Section: Images */}
      <div className="relative flex justify-center md:justify-end mb-10 md:mb-0 w-full">
        <motion.div variants={leftToRightAnimation} className="relative">
          <img
            src={aboutPagedata["img-1"]}
            className="absolute top-16 -left-16 md:top-12 lg:top-20 xl:top-28 xl:-left-32 z-40 w-[50%] h-[50%] rounded-lg"
            alt="code"
          />
          <img
            src={aboutPagedata["img-2"]}
            className="w-56 sm:w-72 md:w-[28rem] lg:w-[32rem] rounded-lg shadow-lg z-0"
            alt="orgination"
          />
        </motion.div>
      </div>
      {/* Right Section: Content */}
      <div className="text-center md:text-left max-w-xl px-4 sm:px-6 md:px-0 mt-10 md:mt-0 md:ml-12">
        <motion.h1
          variants={rightToLeftAnimation}
          className="text-black text-md sm:text-lg md:text-xl font-semibold uppercase flex items-center justify-center md:justify-start"
        >
          <span className="w-8 sm:w-12 h-[2px] bg-[#6aebd3] inline-block mr-2 sm:mr-4"></span>
          {aboutPagedata.animated_title}
          <span className="w-8 sm:w-12 h-[2px] bg-[#6aebd3] inline-block ml-2 sm:ml-4"></span>
        </motion.h1>

        <motion.h2
          variants={rightToLeftAnimation}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-semibold text-indigo-950 mt-4 sm:mt-6"
        >
          {aboutPagedata.header_title}
          <span className="underline decoration-8 decoration-[#6aebd3] underline-offset-1">
            {aboutPagedata.underline_text}
          </span>
        </motion.h2>

        <motion.p
          variants={leftToRightAnimation}
          className="text-gray-600 text-sm sm:text-base mt-6 sm:mt-8 leading-relaxed"
        >
          {aboutPagedata.header_description}
        </motion.p>
        <motion.div variants={topToBottomAnimation}>
          <Button
            title={aboutPagedata.button_title}
            className="mb-4 sm:mb-0 mt-10 sm:mx-2"
            onClick={aboutPagedata.button_value}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
