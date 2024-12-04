"use client";
import React, { useState, useEffect } from "react";

export interface TestimonialData {
  header_title: string,
  header_description: string,
  animated_title: string,
  button_value: string,
  post_title: string,
  post_image: string,
  post_description: string,
  rating: string,
  icon: { type: string, value: string },
  source: string
}

interface TestimonialSectionType {
  data: TestimonialData[],
}
const testimonials = [
  {
    quote:
      "Florian is very professional. He followed me for many months for the conceptualization of my website. I am very happy with the result.",
    author: "Frederic S.",
    role: "The Wonders of the City",
    imageUrl: "https://via.placeholder.com/100", // Placeholder for the client's image
  },
  {
    quote:
      "Very professional, very responsive, force of proposal and innovation.",
    author: "Francois B.",
    role: "Photographer",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    quote:
      "We worked with Florian to create a website for our café. We are very happy with our site.",
    author: "Chloe P.",
    role: "Nocino",
    imageUrl: "https://via.placeholder.com/100",
  },
];

const TestimonialPage: React.FC<TestimonialSectionType> = ({
  data
 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Automatically change slide every 10 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white py-16 px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-black text-lg uppercase font-semibold flex items-center justify-center">
          <span className="w-12 h-[2px] bg-[#87f9e4] inline-block mr-4"></span>
          testimonials
          <span className="w-12 h-[2px] bg-[#87f9e4] inline-block ml-4"></span>
        </h2>
      </div>

      {/* Testimonials Carousel Section */}
      <div className="max-w-4xl mx-auto relative">
        <div className="overflow-hidden relative h-[300px]">
          {data.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              } absolute inset-0 flex flex-col items-center bg-white  rounded-lg p-8 shadow-lg`}
              style={{ transition: "opacity 0.8s ease-in-out" }}
            >
              {/* Rounded Image */}
              <img
                src={testimonial?.post_image}
                alt={`${testimonial?.post_title} profile`}
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-[#87f9e4]"
              />

              {/* Testimonial Content */}
              <p className="text-gray-700 mb-4 text-lg italic text-center">
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
        {testimonials.map((_, index) => (
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
}

export default TestimonialPage;
