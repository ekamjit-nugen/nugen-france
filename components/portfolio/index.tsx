"use client";
import React, { useEffect, useState } from "react";
import { AchievementType } from "../Home/Achievements";
import Link from "next/link";
import { PORTFOLIO_ENG } from "@/lib/language/en";
import { PORTFOLIO_FR } from "@/lib/language/fr";

const PortfolioPage: React.FC<AchievementType> = ({ data, datafr }) => {
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
    <div className="bg-white md:px-0 items-center pt-16 pb-36">
      <div className="w-full mb-6 mt-10">
        <div className="text-4xl font-bold text-center text-black pt-2 underline decoration-[#87f9e4]">
          {language === "fr" ? PORTFOLIO_FR : PORTFOLIO_ENG}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {(language === "fr" ? datafr : data)?.map((achievement, index) => (
          <Link
            key={achievement.button_value + index}
            href={`/Projects?id=${achievement?.button_value}`}
            className="text-blue-500 font-medium relative group"
            style={{ textDecoration: "none" }}
          >
            <img
              src={achievement?.post_image}
              className="w-full h-64 object-fill rounded-lg shadow-lg"
              alt={achievement?.post_title}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 py-3 px-4 rounded-lg shadow-md group-hover:bg-white transition-all duration-300">
              <div className="font-bold text-xl">{achievement?.post_title}</div>
              <p className="text-lg">{achievement?.post_description}</p>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
