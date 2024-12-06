"use client";
import { useState } from "react";
import { AchievementType } from "../Home/Achievements";
import { ImagesData } from "../Home/skillsSection";
import Button from "../ui/ButtonNugen/butoon";

const CloudPlatform: React.FC<ImagesData> = ({
  skillData,
  skillIcons,
  mainImage,
  skillBars,
}) => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
      {/* Title Section */}
      {/* <div className="max-w-6xl mx-auto text-center mb-8">
        <div className="text-black text-lg uppercase font-semibold flex items-center justify-center">
          <span className="w-12 h-[2px] bg-[#6aebd3] inline-block mr-4"></span>
          TURNKEY SOLUTIONS
          <span className="w-12 h-[2px] bg-[#6aebd3] inline-block ml-4"></span>
        </div>
        <div className="text-4xl font-bold">
          <span className="underline decoration-[#6aebd3] underline-offset-2 decoration-8">
            Services
          </span>{" "}
          proposed
        </div>
      </div> */}

      {skillData?.map((item, index) => (
        <div key={index} className="lg:w-1/2 pt-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {item?.header_title}
          </h1>
          <p className="mt-4 text-gray-600">{item?.post_description}</p>

          <div className="mt-6 space-x-4">
            <Button title={"View More"} >
              Get started for free
            </Button>
          </div>
        </div>
      ))}

      {/* Right Section: Accordion */}
      <div className="lg:w-1/2 border-t border-gray-200">
        {skillBars.map((item, index) => (
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
