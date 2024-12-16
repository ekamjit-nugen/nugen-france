"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/ButtonNugen/butoon";
import { homeBoxData } from "..";
import { motion } from "framer-motion";
import {
  leftToRightAnimation,
  topToBottomAnimation,
  staggerParent,
} from "@/lib/animation/animationUtils";
import {
  ALL_SERVICES_ENG,
  SERVICES_ENG,
  TURNKEY_SOLUTIONS_ENG,
} from "@/lib/language/en";
import {
  ALL_SERVICES_FR,
  SERVICES_FR,
  TURNKEY_SOLUTIONS_FR,
} from "@/lib/language/fr";

export interface PageProps {
  ServicesData: homeBoxData[];
  ServicesDataFr: homeBoxData[];
  buttonData?: homeBoxData;
  buttonDataFr?: homeBoxData;
}
function ServicesPage({
  ServicesData,
  ServicesDataFr,
  buttonData,
  buttonDataFr,
}: PageProps) {
  const [language, setLanguage] = useState("en");

  const langData = async () => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  };
  useEffect(() => {
    langData();
  }, []);

  return (
    <motion.div {...staggerParent} className="bg-white px-8 pb-20 pt-20">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <motion.div
          variants={topToBottomAnimation}
          className="text-black text-3xl uppercase font-semibold flex items-center justify-center pb-3"
        >
          <span className="w-12 h-[2px] bg-[#6aebd3] inline-block mr-4"></span>
          {language === "fr" ? TURNKEY_SOLUTIONS_FR : TURNKEY_SOLUTIONS_ENG}
          <span className="w-12 h-[2px] bg-[#6aebd3] inline-block ml-4"></span>
        </motion.div>

        <motion.h1
          variants={topToBottomAnimation}
          className="text-4xl font-bold"
        >
          <span className="underline decoration-[#6aebd3] underline-offset-2 decoration-8"></span>
          {language === "fr" ? SERVICES_FR : SERVICES_ENG}
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(language === "fr" ? ServicesDataFr : ServicesData)?.map(
          (service, index) => (
            <Link
              key={service.button_value + index}
              href={{
                pathname: "/service-section",
                query: { service: service?.button_value },
              }}
              style={{ textDecoration: "none" }}
            >
              <div className="p-4 bg-white hover:bg-[#87f9e4] rounded-lg shadow-xl text-center transition-all duration-300 h-[500px] flex flex-col">
                <motion.div
                  variants={topToBottomAnimation}
                  className="text-blue-500 text-6xl"
                >
                  {service?.post_icon}
                </motion.div>
                <motion.h3
                  variants={topToBottomAnimation}
                  className="text-2xl font-bold mt-4"
                >
                  {service?.post_title}
                </motion.h3>
                <motion.p
                  variants={leftToRightAnimation}
                  className="text-clip overflow-hidden mt-2 text-left"
                >
                  {service?.post_description
                    ?.split(" ")
                    .slice(0, 125)
                    .join(" ") +
                    (service?.post_description?.split(" ").length > 50
                      ? "..."
                      : "")}
                </motion.p>
              </div>
            </Link>
          )
        )}
      </div>

      <motion.div variants={topToBottomAnimation} className="text-center mt-12">
        {buttonData?.url && (
          <Link
            href={
              language === "fr"
                ? buttonDataFr?.url ?? ""
                : buttonData?.url ?? ""
            }
          >
            <Button
              title={language === "fr" ? ALL_SERVICES_FR : ALL_SERVICES_ENG}
              className="mb-4 sm:mb-0 sm:mx-2"
            />
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ServicesPage;
