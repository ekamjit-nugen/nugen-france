"use client";
import Button from "@/components/ui/ButtonNugen/butoon";
import React from "react";
import { buttonDataType } from "..";

export interface dataType {
  header_title: string,
  header_description: string,
  animated_title: string,
  button_value: string,
  post_title: string,
  post_image: string,
  post_description: string,
  url?: string
}

export interface AchievementType {
  data: dataType[];
}

const Achievements: React.FC<AchievementType> = ({ data }) => {
  return (
    <div className="mx-auto text-center">
      <div>
        <h2 className="text-[#0FB8F7] text-lg uppercase font-semibold flex items-center justify-center mb-4">
          <span className="w-12 h-[2px] bg-purple-600 inline-block mr-4"></span>
          FREELANCE WEB DEVELOPMENT
          <span className="w-12 h-[2px] bg-purple-600 inline-block ml-4"></span>
        </h2>

        <h1 className="text-4xl font-bold text-indigo-950 mb-8">
          Latest
          <span className="underline decoration-sky-500 underline-offset-2 decoration-8">
            achievements
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer">
        {data.map((achievement, index) => (
          <div key={index} className="relative group">
            <img
              src={achievement?.post_image}
              className="w-full h-full object-cover "
              alt={achievement?.post_title}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-3 px-4 group-hover:bg-white transition-all duration-300 text-black">
              <div className="font-bold text-xl">{achievement?.post_title}</div>
              <p className="text-lg">{achievement?.post_description}</p>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-12">
        <Button
          title={"See all achievements"}
          className="mb-4 sm:mb-0 sm:mx-2"
        />
      </div>
    </div>
  );
};

export default Achievements;
