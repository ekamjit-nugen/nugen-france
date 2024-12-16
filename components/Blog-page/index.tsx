"use client";
import { BLOG_ENG, LATEST_ENG } from "@/lib/language/en";
import { BLOG_FR, LATEST_FR } from "@/lib/language/fr";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export interface BlogDataType {
  button?: string;
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  post_title: string;
  post_image: string;
  post_description: string;
  date: string;
  button_title: string;
}
export interface BlogPageType {
  BlogData: BlogDataType[];
  BlogDataFr: BlogDataType[];
}
const BlogPage: React.FC<BlogPageType> = ({ BlogData, BlogDataFr }) => {
  const [language, setLanguage] = useState("en");

  const langData = async () => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  };
  useEffect(() => {
    langData();
  }, [langData]);

  return (
    <div className="py-12 px-6 bg-white">
      {/* Title Section */}
      <div className="text-center">
        <div className="text-black text-lg uppercase flex items-center justify-center">
          <span className="w-12 h-[2px] bg-[#87f9e4] inline-block mr-4"></span>
          {language === "fr" ? BLOG_FR : BLOG_ENG}
          <span className="w-12 h-[2px] bg-[#87f9e4] inline-block ml-4"></span>
        </div>
        <div className="text-4xl font-extrabold text-gray-800">
          <span className="underline decoration-[#87f9e4] underline-offset-2 decoration-8">
            {language === "fr" ? LATEST_FR : LATEST_ENG}
          </span>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto md:px-0 items-center mt-14 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto">
          {(language === "fr" ? BlogDataFr : BlogData)?.map((blog, index) => (
            <Link
              key={blog.button_value + index}
              href={{
                pathname: "/blog-detail",
                query: {
                  blog: blog?.button_value,
                },
              }}
              className="text-blue-500 font-medium relative group"
              style={{ textDecoration: "none" }}
            >
              <div
                key={blog.button_title + index}
                className="relative bg-white shadow-2xl rounded-lg p-4 text-center md:text-left hover:shadow-lg transition group"
              >
                <p className="text-gray-500 text-sm mb-3 flex items-center">
                  <span className="mr-2">📅</span>
                  {blog?.date}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {blog?.post_title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {blog?.post_description.split(" ").slice(0, 15).join(" ") +
                    (blog?.post_description.split(" ").length > 10
                      ? "..."
                      : "")}
                </p>{" "}
                <div className="text-blue-500 font-medium relative group">
                  {blog?.button_title}
                </div>
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
