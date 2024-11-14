"use client";
import React from "react";

// Define TypeScript interfaces for data structure
interface Skill {
  skill: string;
  level: number;
}

interface Section1Data {
  sinceYear: string;
  title: string;
  description1: string;
  description2: string;
  skills: Skill[];
}

interface ImagesData {
  mainImage: string;
  skillIcons: string[];
}

interface SkillsData {
  section1: Section1Data;
  images: ImagesData;
}

// Data with type annotations
const skillsData: SkillsData = {
  section1: {
    sinceYear: "2012",
    title: "SKILLS in development",
    description1: "From elegant website design to server-side performance optimization, I'm here to make your projects a reality.",
    description2: "My skills include, among others, front-end development with technologies such as HTML, CSS, and JavaScript, as well as back-end development with languages such as PHP, Node.js.",
    skills: [
      { skill: "HTML / CSS", level: 90 },
      { skill: "PHP / MySQL", level: 85 },
      { skill: "WordPress", level: 80 },
      { skill: "JavaScript", level: 90 },
      { skill: "React", level: 75 },
      { skill: "Node.js", level: 65 },
    ],
  },
  images: {
    mainImage: "https://www.florianperrier.com/app/uploads/2023/09/developpeur-web-freelance-paris-florian-perrier.jpg.webp",
    skillIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    ],
  },
};

// SkillBar Component with types
interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => (
  <div>
    <div className="flex justify-between text-gray-300">
      <span>{skill}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
      <div
        className="h-2 rounded-full"
        style={{
          width: `${level}%`,
          background: "linear-gradient(to right, #0FB8F7, #54F0D1)",
        }}
      ></div>
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
  const { section1, images } = skillsData;

  return (
    <section className="bg-[#010c38] text-white py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Side: Image and Skill Icons */}
        <div className="space-y-6">
          <img
            src={images.mainImage}
            alt="Coding Laptop"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-4 gap-4 justify-center md:justify-start">
            {images.skillIcons.map((icon, index) => (
              <img key={index} src={icon} alt={`Skill ${index}`} className="w-10 h-10 mx-auto" />
            ))}
          </div>
        </div>

        {/* Right Side: Skills and Progress Bars */}
        <div className="space-y-4">
          <div className="text-[#0FB8F7] text-lg uppercase font-semibold flex items-center justify-center">
            <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block mr-4"></span>
            SINCE {section1.sinceYear}
            <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block ml-4"></span>
          </div>
          <div className="text-4xl font-bold text-white">{section1.title}</div>
          <p className="text-gray-300">{section1.description1}</p>
          <p className="text-gray-300">{section1.description2}</p>
          <div className="space-y-3">
            {section1.skills.map((skill, index) => (
              <SkillBar key={index} skill={skill.skill} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
