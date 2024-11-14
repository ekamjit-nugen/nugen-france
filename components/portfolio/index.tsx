"use client";
import React from "react";

const achievementsData = [
  {
    title: "Flexikeg",
    description: "Web design & développement web",
    imageUrl:
      "https://www.florianperrier.com/app/uploads/2024/01/florian-perrier-developpement-site-web-flexikeg-3.jpg",
    url: "/projects",
  },
  {
    title: "Crazy Tiger",
    description: "Web design & développement web",
    imageUrl:
      "https://www.florianperrier.com/app/uploads/2024/01/florian-perrier-developpement-web-crazy-tiger-1.jpg.webp",
    url: "#",
  },
  {
    title: "Pradier House",
    description: "Web design & développement web",
    imageUrl:
      "https://www.florianperrier.com/app/uploads/2024/01/florian-perrier-developpement-web-paris-maison-pradier-1-1536x1152.jpg.webp",
    url: "#",
  },
  {
    title: "Flexikeg",
    description: "Web design & développement web",
    imageUrl:
      "https://www.florianperrier.com/app/uploads/2024/01/florian-perrier-developpement-site-web-flexikeg-3.jpg",
    url: "/projects",
  },
  {
    title: "Pradier House",
    description: "Web design & développement web",
    imageUrl:
      "https://www.florianperrier.com/app/uploads/2024/01/florian-perrier-developpement-web-paris-maison-pradier-1-1536x1152.jpg.webp",
    url: "#",
  },
  {
    title: "Crazy Tiger",
    description: "Web design & développement web",
    imageUrl:
      "https://www.florianperrier.com/app/uploads/2024/01/florian-perrier-developpement-web-crazy-tiger-1.jpg.webp",
    url: "#",
  },
];

function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 md:px-0 items-center mt-24 mb-36">
      <div className="w-full mb-12">
        <h1 className="text-4xl font-bold text-center mb-4">{"Portfolio"}</h1>
        <div className="text-center text-gray-500">
          <span>{"Home"}</span> <span className="mx-2">›</span>
          <span>{"Portfolio"}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {achievementsData.map((achievement, index) => (
          <a
            key={index}
            href={achievement.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <img
              src={achievement.imageUrl}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              alt={achievement.title}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 py-3 px-4 rounded-lg shadow-md group-hover:bg-white transition-all duration-300">
              <h2 className="font-bold text-xl">{achievement.title}</h2>
              <p className="text-lg">{achievement.description}</p>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
