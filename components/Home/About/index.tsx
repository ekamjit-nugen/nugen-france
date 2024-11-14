"use client";
import Button from "@/components/ui/ButtonNugen/butoon";
import React from "react";

const aboutData = {
  images: {
    codeImage:
      "https://www.florianperrier.com/app/uploads/2023/09/markus-spiske-1LLh8k2_YFk-unsplash-e1695906657553.jpg",
    personImage:
      "https://www.florianperrier.com/app/uploads/2023/09/florian-perrier-developpeur-web-freelance-paris.jpg.webp",
  },
  title: "ABOUT",
  heading: "Web Freelance in Paris",
  subheading: "Developer",
  description: [
    "Showcase site, e-commerce store, or mobile application are among the solutions developed for clients who contacted me.",
    "Whether you are a craftsman, an established SME, or a start-up, I am here to help you realize your website creation project. Do not hesitate to contact me to discuss your website creation project and to obtain a free and detailed quote.",
  ],
  buttonText: "Contact me",
};

function About() {
  const { images, title, heading, subheading, description, buttonText } =
    aboutData;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-10 md:px-16 md:py-24 min-h-screen">
      <div className="relative flex justify-center md:justify-end mb-10 md:mb-0 w-full">
        <div className="relative">
          <img
            src={images.codeImage}
            className="absolute top-16 -left-16 md:top-12 lg:top-20 xl:top-28 xl:-left-32 z-40 w-[50%] h-[50%] rounded-lg"
            alt="code"
          />
          <img
            src={images.personImage}
            className="w-56 sm:w-72 md:w-[28rem] lg:w-[32rem] rounded-lg shadow-lg z-0"
            alt="man"
          />
        </div>
      </div>
      <div className="text-center md:text-left max-w-xl px-4 sm:px-6 md:px-0 mt-10 md:mt-0 md:ml-12">
        <h1 className="text-sky-400 text-base sm:text-lg md:text-xl font-semibold uppercase flex items-center justify-center md:justify-start">
          <span className="w-8 sm:w-12 h-[2px] bg-[#0FB8F7] inline-block mr-2 sm:mr-4"></span>
          {title}
          <span className="w-8 sm:w-12 h-[2px] bg-[#0FB8F7] inline-block ml-2 sm:ml-4"></span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-indigo-950 mt-4 sm:mt-6">
          {heading},
          <span className="underline decoration-8 decoration-sky-500 underline-offset-1">
            {subheading}
          </span>
          <br /> Freelance in Paris
        </h2>

        {description.map((text, index) => (
          <p
            key={index}
            className="text-gray-600 text-sm sm:text-base mt-6 sm:mt-8 leading-relaxed"
          >
            {text}
          </p>
        ))}

        <Button title={buttonText} className="mb-4 sm:mb-0 sm:mx-2" />
      </div>
    </div>
  );
}

export default About;
