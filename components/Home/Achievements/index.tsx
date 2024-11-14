"use client";
import Button from "@/components/ui/ButtonNugen/butoon";
import React from "react";

const achievementsData = [
  {
    title: "Flexikeg",
    description: "Web design & développement web",
    imageUrl:
      "https://www.florianperrier.com/app/uploads/2024/01/florian-perrier-developpement-site-web-flexikeg-3.jpg",
  },
  {
    title: "Crazy Tiger",
    description: "Web design & développement web",
    imageUrl:
      "https://www.florianperrier.com/app/uploads/2024/01/florian-perrier-developpement-web-crazy-tiger-1.jpg.webp",
  },
  {
    title: "Pradier House",
    description: "Web design & développement web",
    imageUrl:
      "https://www.florianperrier.com/app/uploads/2024/01/florian-perrier-developpement-web-paris-maison-pradier-1-1536x1152.jpg.webp",
  },
  {
    title: "Global Health Action",
    description: "Web design & développement web",
    imageUrl:
      "https://www.florianperrier.com/app/uploads/2024/01/florian-perrier-developpeur-web-freelance-paris-actionsantemondiale-1.jpg.webp",
  },
];

function Achievements() {
  return (
    <div className="mx-auto text-center">
      <div>
        <h2 className="text-[#0FB8F7] text-lg uppercase font-semibold flex items-center justify-center mb-4">
          <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block mr-4"></span>
          FREELANCE WEB DEVELOPMENT
          <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block ml-4"></span>
        </h2>

        <h1 className="text-4xl font-bold text-indigo-950 mb-8">
          Latest
          <span className="underline decoration-sky-500 underline-offset-2 decoration-8">
            achievements
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="relative group">
            <img
              src={achievement.imageUrl}
              className="w-full h-full object-cover "
              alt={achievement.title}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 py-3 px-4 group-hover:bg-white transition-all duration-300">
              <h2 className="font-bold text-xl">{achievement.title}</h2>
              <p className="text-lg">{achievement.description}</p>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
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
}

export default Achievements;
