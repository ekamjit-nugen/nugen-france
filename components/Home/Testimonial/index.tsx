"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/lib/common/useLanguage";
import { TESTIMONIALS_ENG } from "@/lib/language/en";
import { TESTIMONIALS_FR } from "@/lib/language/fr";
import Image from "next/image";

export interface TestimonialData {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  post_title: string;
  post_image: string;
  post_description: string;
  rating: string;
  icon: { type: string; value: string };
  source: string;
}

interface TestimonialSectionType {
  data: TestimonialData[];
  dataFr: TestimonialData[];
}

const TestimonialPage: React.FC<TestimonialSectionType> = ({
  data,
  dataFr,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const { language } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on initial render
  }, []);

  return (
    <div className="bg-white py-2 pb-20 px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-black text-3xl uppercase font-semibold flex items-center justify-center ">
          <span className="w-12 h-[2px] bg-[#87f9e4] inline-block mr-4"></span>
          {language === "fr" ? TESTIMONIALS_FR : TESTIMONIALS_ENG}
          <span className="w-12 h-[2px] bg-[#87f9e4] inline-block ml-4"></span>
        </div>
      </div>

      {/* Testimonials Carousel Section */}
      <div className="max-w-4xl mx-auto relative">
        <div className="overflow-hidden relative h-[300px]">
          {(language === "fr" ? dataFr : data)?.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              } absolute inset-0 flex flex-col items-center bg-white  rounded-lg p-8 shadow-lg`}
              style={{ transition: "opacity 0.8s ease-in-out" }}
            >
              {/* Rounded Image */}
              <Image
                src={testimonial?.post_image || ""}
                alt={`${testimonial?.post_title} profile`}
                width={100}
                height={100}
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-[#87f9e4]"
              />

              {/* Testimonial Content */}
              <p className="text-gray-700 mb-4 md:text-lg text-base italic text-center">
                {testimonial?.post_description}
              </p>
              <p className="font-semibold text-gray-900">
                {testimonial?.post_title}
              </p>
              {/* <p className="text-sm text-gray-500">{testimonial.role}</p> */}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow hover:bg-gray-400"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow hover:bg-gray-400"
        >
          &#8594;
        </button>
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-6">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
