"use client";
import { useEffect, useState } from "react";
import { AchievementType } from "../Home/Achievements";
import { ImagesData } from "../Home/skillsSection";
import Button from "../ui/ButtonNugen/butoon";
import Link from "next/link";

const CloudPlatform: React.FC<ImagesData> = ({
  skillData,
  skillIcons,
  mainImage,
  skillBars,
  SkillsBarsFr,
  skillDatafr,
}) => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

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
    <div className="bg-white px-56 p-6 flex flex-col lg:flex-row gap-8">
      {/* Title Section */}

      {(language === "fr" ? skillDatafr : skillData)?.map((item, index) => (
        <div key={index} className="lg:w-1/2 pt-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {item?.header_title}
          </h1>
          <p className="mt-4 text-gray-600">{item?.post_description}</p>

          <div className="mt-6 space-x-4">
            <Link href={item?.button_value}>
            <Button title={item?.button_title}></Button>
            </Link>
          </div>
        </div>
      ))}

      {/* Right Section: Accordion */}
      <div className="lg:w-1/2 border-t border-gray-200">
        {(language === "fr" ? SkillsBarsFr : skillBars)?.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h4 className="text-lg font-semibold text-gray-800">
                {item?.button_title}
              </h4>
              <span className="text-gray-500">
                {expanded === index ? "▲" : "▼"}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                expanded === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="bg-opacity-35">{item?.button_value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudPlatform;
