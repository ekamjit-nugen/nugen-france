"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/ButtonNugen/butoon";
import { homeBoxData } from "..";
import { motion } from "framer-motion";
import {
  leftToRightAnimation,
  rightToLeftAnimation,
  staggerParent,
  topToBottomAnimation,
} from "@/lib/animation/animationUtils";

export interface PageProps {
  ServicesData: homeBoxData[];
  ServicesDataFr: homeBoxData[];
}
function ServicesPage({ ServicesData, ServicesDataFr }: PageProps) {
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
    <motion.div {...staggerParent} className="bg-white py-16 px-8 md:px-2">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <motion.h2
          variants={topToBottomAnimation}
          className="text-black text-lg uppercase font-semibold flex items-center justify-center"
        >
          <span className="w-12 h-[2px] bg-[#6aebd3] inline-block mr-4"></span>
          TURNKEY SOLUTIONS
          <span className="w-12 h-[2px] bg-[#6aebd3] inline-block ml-4"></span>
        </motion.h2>

        <motion.h1
          variants={topToBottomAnimation}
          className="text-4xl font-bold"
        >
          <span className="underline decoration-[#6aebd3] underline-offset-2 decoration-8"></span>
          Services
        </motion.h1>
      </div>

      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(language === "fr" ? ServicesDataFr : ServicesData)?.map(
          (service, index) => (
            <Link
              key={service.button_value + index}
              href={{
                pathname: "/service-section",
                query: {
                  service: service?.button_value,
                },
              }}
              style={{ textDecoration: "none" }}
            >
              <div className="p-6 bg-white group hover:bg-[#87f9e4] hover:text-black rounded-lg shadow-2xl text-center h-[450px] flex flex-col">
                <div className="flex-grow">
                  <motion.div
                    variants={topToBottomAnimation}
                    className="text-blue-500 text-5xl "
                  >
                    {service?.post_icon}
                  </motion.div>
                  <motion.div
                    variants={leftToRightAnimation}
                    className="text-xl font-bold p-3"
                  >
                    {service?.post_title}
                  </motion.div>
                  <motion.div
                    variants={leftToRightAnimation}
                    className="text-left max-h-64"
                  >
                    <p className="text-base mb-2 text-wrap">
                      {service?.post_description
                        ?.split(" ")
                        .slice(0, 125)
                        .join(" ") +
                        (service?.post_description?.split(" ").length > 60
                          ? "..."
                          : "")}
                    </p>
                  </motion.div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>

      <motion.div variants={topToBottomAnimation} className="text-center mt-12">
        <Button title={language === "fr" ? "TOUTES LES SERVICES" : "ALL SERVICES"} className="mb-4 sm:mb-0 sm:mx-2" />
      </motion.div>
    </motion.div>
  );
}

export default ServicesPage;
