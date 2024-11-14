"use client";
import React from "react";

const BlogPage = () => {
  const blogs = [
    {
      date: "02 Nov 2024",
      title: "The Importance of WordPress Maintenance",
      href:"/blog-detail",
      description:
        "WordPress is a popular CMS due to its flexibility. However, regular maintenance is crucial to keep it operational at all times.",
    },
    {
      date: "Oct 20, 2024",
      title: "What are the missions of the freelance developer?",
      href:"/blog-detail",
      description:
        "The freelance developer works on designing and developing tailored web applications for clients.",
    },
    {
      date: "August 28, 2024",
      title: "Web development: focus on the latest trends",
      href:"/blog-detail",
      description:
        "Discover the latest trends in the web development world, from AI integrations to modern frameworks.",
    },
    {
      date: "August 10, 2024",
      title: "Website creation: what mistakes should you avoid?",
      href:"/blog-detail",
      description:
        "Avoid common mistakes in website creation to ensure a better user experience and maintainability.",
    },
  ];

  return (
    <div className="py-12 px-6 bg-white">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-[#0FB8F7] text-lg uppercase flex items-center justify-center">
          <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block mr-4"></span>
          Blog
          <span className="w-12 h-[2px] bg-[#0FB8F7] inline-block ml-4"></span>
        </h2>
        <h1 className="text-4xl font-extrabold text-gray-800">
          Latest
          <span className="underline decoration-sky-500 underline-offset-2 decoration-8">
            items
          </span>
        </h1>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto md:px-0 items-center mt-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative bg-white shadow-2xl rounded-lg p-6 hover:shadow-lg transition group"
            >
              <p className="text-gray-500 text-sm mb-3 flex items-center">
                <span className="mr-2">📅</span>
                {blog.date}
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-6">{blog.description}</p>
              <a href={blog.href} className="text-blue-500 font-medium relative group">
                Read more...
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all"></span>
              </a>

              {/* Hover Line */}
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#0FB8F7] group-hover:w-full transition-all duration-300"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
