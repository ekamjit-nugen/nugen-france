"use client";
import React, { useState, useEffect } from "react";

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

function TestimonialPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
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
        <h2 className="text-[#0FB8F7] text-lg uppercase font-semibold flex items-center justify-center">
          <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block mr-4"></span>
          testimonials
          <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block ml-4"></span>
        </h2>

        <h1 className="text-4xl font-bold mt-4">
          They make
          <span className="underline decoration-sky-500 underline-offset-2 decoration-8 mx-2">
            me trust
          </span>
        </h1>
      </div>

      {/* Testimonials Carousel Section */}
      <div className="max-w-4xl mx-auto relative">
        <div className="overflow-hidden relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              } absolute inset-0 flex flex-col items-center bg-white border border-gray-200 rounded-lg p-8 shadow-lg`}
              style={{ transition: "opacity 0.8s ease-in-out" }}
            >
              {/* Rounded Image */}
              <img
                src={testimonial.imageUrl}
                alt={`${testimonial.author} profile`}
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-[#0FB8F7]"
              />

              {/* Testimonial Content */}
              <p className="text-gray-700 mb-4 text-lg italic text-center">
                "{testimonial.quote}"
              </p>
              <p className="font-semibold text-gray-900">
                {testimonial.author}
              </p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
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
              index === currentIndex ? "bg-[#0FB8F7]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default TestimonialPage;
