"use client";
import React from "react";

const CallToAction = () => {
  return (
    <div className="relative flex items-center justify-center py-16 text-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/gradient-blue-abstract-technology-background_23-2149213765.jpg')",
        }}
      />
      <div className="text-center space-y-6 px-4 md:px-8 lg:px-16">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug md:leading-tight lg:leading-snug">
          You wish to entrust me
          <br />
          with
          <span className="underline decoration-sky-400">
            the web development
          </span>
          <br />
          of your site?
        </h2>
        <button className="relative inline-block bg-sky-500 text-white py-3 px-6 rounded-lg overflow-hidden text-base md:text-lg lg:text-xl font-semibold transition-all duration-300 hover:bg-sky-700 group">
          <span className="absolute inset-0 hover:bg-sky-600 bg-sky-400scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          <span className="relative z-10">Contact Me</span>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
