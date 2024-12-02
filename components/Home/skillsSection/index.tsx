"use client";
import React from "react";
import { buttonDataType } from "..";

interface IconsData {
  post_image: string;
  image: string;
}
interface SkillBarProps {
  button_value?: string;
  button_title?: string;
  image?: string;
}
interface ImagesData {
  mainImage: SkillBarProps;
  skillIcons: IconsData[];
  skillBars: SkillBarProps[];
  skillData: buttonDataType[];
}

// const SkillBar: React.FC<ImagesData> = ({ skillBars }) => (
//   <div>
//     <div className="flex justify-between text-gray-300">
//       <span>{skillBars?.button_value}</span>
//       <span>{skillBars?.button_title}%</span>
//     </div>
//     <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
//       <div
//         className="h-2 rounded-full"
//         style={{
//           width: `${level}%`,
//           background: "linear-gradient(to right, #0FB8F7, #54F0D1)",
//         }}
//       ></div>
//     </div>
//   </div>
// );

const SkillsSection: React.FC<ImagesData> = ({
  skillIcons,
  skillData,
  skillBars,
  mainImage,
}) => {
  return (
    <section className="bg-[#010c38] text-white py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Side: Image and Skill Icons */}
        <div className="space-y-6">
          <img
            src={mainImage?.image}
            alt="Coding Laptop"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-4 gap-4 justify-center md:justify-start">
            {skillIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.post_image}
                alt={`Skill ${index}`}
                className="w-10 h-10 mx-auto"
              />
            ))}
          </div>
        </div>

        {/* Right Side: Skills and Progress Bars */}
        <div className="space-y-4">
          {skillData?.map((data) => (
            <div>
              <div className="text-[#0FB8F7] text-lg uppercase font-semibold flex items-center justify-center">
                {/* <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block mr-4"></span> */}
                {data?.header_title}
                {/* <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block ml-4"></span> */}
              </div>
              <div className="text-4xl font-bold text-white">
                {data?.header_title}
              </div>
              <p className="text-gray-300">{data?.post_description}</p>
            </div>
          ))}
          <div className="space-y-3">
            {skillBars?.map((skillBars, index) => (
              <div>
                <div className="flex justify-between text-gray-300">
                  <span>{skillBars?.button_title}</span>
                  <span>{skillBars?.button_value}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${skillBars?.button_value}%`,
                      background: "linear-gradient(to right, #0FB8F7, #54F0D1)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
