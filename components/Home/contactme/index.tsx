"use client";
import Button from "@/components/ui/ButtonNugen/butoon";
import React from "react";
interface homeBoxData {
  header_title: string,
  header_description: string,
  animated_title: string,
  button_value: string,
  button_title: string,
  post_title: string,
  post_image: string,
  post_description: string,
  post_icon: string,
}
interface dataType {
  data: homeBoxData[]}

const CallToAction = ({data}:dataType) => {
  return (
    <div className="relative flex items-center justify-center py-24 text-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/gradient-blue-abstract-technology-background_23-2149213765.jpg')",
        }}
      />
      <div className="text-center px-4 md:px-8 text-white z-30">
        <div className="text-xl md:text-3xl lg:text-4xl font-bold leading-snug md:leading-tight lg:leading-snug">
{data?.[0]?.header_title}          {/* <br />
          with
          <span className="underline decoration-sky-400">
            the web development
          </span>
          <br />
          of your site? */}
        </div>
        <Button title={data?.[0]?.button_title} className="mb-4 sm:mb-0 sm:mx-2" />
      </div>
    </div>
  );
};

export default CallToAction;
