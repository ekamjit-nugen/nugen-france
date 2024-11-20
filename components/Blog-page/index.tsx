"use client";
import Link from "next/link";
import React from "react";
export interface BlogDataType {
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
}
const BlogPage: React.FC<BlogPageType> = ({ BlogData }) => {
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
          {BlogData.map((blog, index) => (
            <Link
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
                className="relative bg-white s  hadow-2xl rounded-lg p-6 hover:shadow-lg transition group"
              >
                <p className="text-gray-500 text-sm mb-3 flex items-center">
                  <span className="mr-2">📅</span>
                  {blog.date}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {blog.post_title}
                </h3>
                <p className="text-gray-600 mb-6">{blog.post_description}</p>
                <a
                  href={blog.button_value}
                  className="text-blue-500 font-medium relative group"
                >
                  {blog.button_title}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all"></span>
                </a>

                {/* Hover Line */}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#0FB8F7] group-hover:w-full transition-all duration-300"></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
