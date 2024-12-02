"use client";
import React from "react";
import { AchievementType } from "../Home/Achievements";

  const PortfolioPage: React.FC<AchievementType> = ({ data }) => {
  return (
    <div className="container mx-auto  md:px-0 items-center mt-24 mb-36">
      <div className="w-full mb-6 mt-10">
        <div className="text-4xl font-bold text-center pt-2 underline decoration-sky-500 ">{"Portfolio"}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {data.map((achievement, index) => (
          <a
            key={index +5}
            href={achievement?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <img
              src={achievement?.post_image}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              alt={achievement?.post_title}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 py-3 px-4 rounded-lg shadow-md group-hover:bg-white transition-all duration-300">
              <div className="font-bold text-xl">{achievement?.post_title}</div>
              <p className="text-lg">{achievement?.post_description}</p>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
