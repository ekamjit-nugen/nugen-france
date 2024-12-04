"use client";
import React, { useLayoutEffect } from "react";
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
}
interface ServiceClientsProps {
  className?: string;
  image?: string | StaticImageData;
  pageContent?: ServiceContentType;
}
const InterestedSection: React.FC<ServiceClientsProps> = ({
  className,
  pageContent,
  image,
}) => {
  return (
    <motion.section
      {...staggerParent}
      className=" w-full h-full overflow-x-hidden lg:shadow-2xl top-diagonal lg:py-16"
    >
      <div className={` relative items-start w-full h-full ${className}`}>
        <div className="w-full p-8 flex flex-col md:flex-row">
          <div className="w-full lg:pl-32 flex flex-col justify-center">
            <motion.div
              variants={leftToRightAnimation}
              className="font-serif text-black text-3xl lg:text-4xl"
            >
              {pageContent?.header_title}
            </motion.div>
            <motion.div
              variants={leftToRightAnimation}
              className="pt-8 w-[80%] text-black"
            >
              {pageContent?.header_description}
            </motion.div>
            <motion.div
              variants={leftToRightAnimation}
              className="flex justify-start pt-4"
              id=""
            >
              <QueryForm buttonTitle={"Send Query"} />
            </motion.div>
          </div>
          <motion.div
            variants={rightToLeftAnimation}
            className="h-full w-full lg:-mt-12 flex justify-start "
          >
            <Image
              src={pageContent?.image || ""}
              alt="image"
              height={650}
              width={650}
              className=""
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default InterestedSection;
