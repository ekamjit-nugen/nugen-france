"use client";
import React from "react";

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillsSection: React.FC = () => {
  return (
    <section className="bg-[#010c38] text-white py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Image and Skill Icons */}
        <div className="space-y-6">
          <img
            src="https://www.florianperrier.com/app/uploads/2023/09/developpeur-web-freelance-paris-florian-perrier.jpg.webp"
            alt="Coding Laptop"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-4 gap-4 justify-center md:justify-start">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              className="w-10 h-10 mx-auto"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              className="w-10 h-10 mx-auto"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-10 h-10 mx-auto"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              alt="PHP"
              className="w-10 h-10 mx-auto"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg"
              alt="WordPress"
              className="w-10 h-10 mx-auto"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
              className="w-10 h-10 mx-auto"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code"
              className="w-10 h-10 mx-auto"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              alt="AWS"
              className="w-10 h-10 mx-auto"
            />
          </div>
        </div>

        {/* Right Side: Skills and Progress Bars */}
        <div className="space-y-4">
          <h2 className="text-[#0FB8F7] text-lg uppercase font-semibold flex items-center justify-center">
            <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block mr-4"></span>
            SINCE 2012
            <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block ml-4"></span>
          </h2>
          <h2 className="text-4xl font-bold text-white">
            SKILLS in development
          </h2>
          <p className="text-gray-300">
            From elegant website design to server-side performance optimization,
            I'm here to make your projects a reality.
          </p>
          <p className="text-gray-300">
            My skills include, among others, front-end development with
            technologies such as HTML, CSS, and JavaScript, as well as back-end
            development with languages such as PHP, Node.js.
          </p>
          <div className="space-y-3">
            <SkillBar skill="HTML / CSS" level={90} />
            <SkillBar skill="PHP / MySQL" level={85} />
            <SkillBar skill="WordPress" level={80} />
            <SkillBar skill="JavaScript" level={90} />
            <SkillBar skill="React" level={75} />
            <SkillBar skill="Node.js" level={65} />
          </div>
        </div>
      </div>
    </section>
  );
};

// SkillBar Component with gradient effect
const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  return (
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
};

export default SkillsSection;
