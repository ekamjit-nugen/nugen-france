"use client";
import { useEffect, useState } from "react";
import { ImagesData } from "../Home/skillsSection";
import Button from "../ui/ButtonNugen/butoon";
import Link from "next/link";
import { useLanguage } from "@/lib/common/useLanguage";

const CloudPlatform: React.FC<ImagesData> = ({
  skillData,
  skillIcons,
  mainImage,
  skillBars,
  SkillsBarsFr,
  skillDatafr,
}) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };
  const { language } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on initial render
  }, []);

  return (
    <div className="bg-white px-4 md:px-12 lg:px-20 py-6 flex flex-col lg:flex-row gap-8">
      {/* Title Section */}
      {(language === "fr" ? skillDatafr : skillData)?.map((item, index) => (
        <div key={index} className="w-full lg:w-1/2 pt-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center lg:text-left">
            {item?.header_title}
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base text-center lg:text-left">
            {item?.post_description}
          </p>

          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <Link href={item?.button_value}>
              <Button title={item?.button_title}></Button>
            </Link>
          </div>
        </div>
      ))}

      {/* Right Section: Accordion */}
      <div className="w-full lg:w-1/2 border-t lg:border-t-0 border-gray-200">
        {(language === "fr" ? SkillsBarsFr : skillBars)?.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <div
              className="flex justify-between items-center cursor-pointer p-4"
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
              <div className="p-4 bg-gray-50">{item?.button_value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudPlatform;
