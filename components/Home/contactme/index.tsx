"use client";
import Button from "@/components/ui/ButtonNugen/butoon";
import React from "react";

const CallToAction = () => {
  return (
    <div className="relative flex items-center justify-center py-8 text-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/gradient-blue-abstract-technology-background_23-2149213765.jpg')",
        }}
      />
      <div className="text-center px-4 md:px-8 text-white z-30">
        <div className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug md:leading-tight lg:leading-snug">
          You wish to entrust me
          <br />
          with
          <span className="underline decoration-sky-400">
            the web development
          </span>
          <br />
          of your site?
        </div>
        <Button title={"Contact Me"} className="mb-4 sm:mb-0 sm:mx-2" />
      </div>
    </div>
  );
};

export default CallToAction;
