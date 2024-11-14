"use client";
import React from "react";
import Link from "next/link";

function ServicesPage() {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-[#0FB8F7] text-lg uppercase font-semibold flex items-center justify-center">
          <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block mr-4"></span>
          TURNKEY SOLUTIONS
          <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block ml-4"></span>
        </h2>

        <h1 className="text-4xl font-bold">
          <span className="underline decoration-sky-500 underline-offset-2 decoration-8">
            Services
          </span>
          proposed
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Cards */}
        {[
          {
            title: "Branding / Web Design",
            icon: "📐",
            description: [
              "A web design created to measure to meet market expectations, while positively setting you apart from the competition.",
              "With more than 500 works completed, some projects have been rewarded in different categories such as: food, spirits, institutional, as well as cosmetics.",
            ],
          },
          {
            title: "Website Creation",
            icon: "💻",
            description: [
              "Website creation is essential to improve the visibility of your activities. The development of your website is carried out with care and meets W3C web standards.",
              "HTML5 & CSS3, Responsive design, Adaptable to computer, tablet, smartphone.",
            ],
          },
          {
            title: "Creation of e-commerce site",
            icon: "🛒",
            description: [
              "Launching your online store is an opportunity to transform your visitors into a paying and loyal audience.",
              "E-commerce solutions offer much more than just online sales platforms. It adapts because it can be integrated into a catalog, allowing you to communicate your brand and create lasting connections with your customers.",
            ],
          },
          {
            title: "WordPress Development",
            icon: "🔧",
            description: [
              "WordPress, more than just a content management system (CMS), embodies the concept of a 'framework' which allows for flexibility and extended features.",
              "From simple blogs to full e-commerce sites, WordPress adapts to all.",
            ],
          },
          {
            title: "WordPress Maintenance",
            icon: "🔄",
            description: [
              "A healthy website is an updated website. This includes regular updates to plugins, themes, and security patches.",
              "We perform the necessary updates to maintain the reliability of your website.",
            ],
          },
          {
            title: "SEO Referencing",
            icon: "📈",
            description: [
              "Your website is developed with the aim of appearing on the first page of search engines.",
              "Optimized page loading times, adaptive design for all devices, and integration of different social networks.",
            ],
          },
          {
            title: "Accommodation",
            icon: "🏠",
            description: [
              "Your website needs a powerful, robust hosting solution adapted to your business needs.",
              "Dedicated server hosting, Cloud hosting.",
            ],
          },
          {
            title: "Mobile Development",
            icon: "📱",
            description: [
              "Today, more than half of web traffic is on mobile devices. Ensure you have a mobile app that meets the needs of your audience.",
              "Cross-platform development (React Native, Flutter).",
            ],
          },
        ].map((service, index) => (
          <Link href="/services" key={index}>
            <div className="p-8 bg-white hover:bg-[#0FB8F7] hover:text-white rounded-lg shadow-2xl text-center transition-all duration-300 min-h-[400px] flex flex-col">
              <div className="flex-grow">
                <div className="text-blue-500 text-5xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                {service.description.map((line, i) => (
                  <p key={i} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="relative inline-block bg-[#0FB8F7] text-white py-3 px-6 rounded-lg overflow-hidden text-base md:text-lg lg:text-xl font-semibold transition-all duration-300 hover:bg-blue-700 group">
          <span className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          <span className="relative z-10">Contact Me</span>
        </button>
      </div>
    </div>
  );
}

export default ServicesPage;
