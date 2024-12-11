"use client";
import { BlogPageType } from "@/components/Blog-page";
import Button from "@/components/ui/ButtonNugen/butoon";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  leftToRightAnimation,
  staggerParent,
  topToBottomAnimation,
} from "@/lib/animation/animationUtils";
import { useRouter } from "next/navigation";

const BlogSectionHome = ({ BlogData, BlogDataFr }: BlogPageType) => {
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

  const router = useRouter();
  return (
    <motion.section {...staggerParent} className="py-12 px-6 bg-white">
      {/* Title Section */}
      <div className="text-center mb-12">
        <motion.h2
          variants={topToBottomAnimation}
          className="text-black text-lg uppercase flex items-center justify-center"
        >
          <span className="w-12 h-[2px] bg-[#87f9e4] inline-block mr-4"></span>
          Blog
          <span className="w-12 h-[2px] bg-[#87f9e4] inline-block ml-4"></span>
        </motion.h2>
        <motion.h1
          variants={leftToRightAnimation}
          className="text-4xl font-extrabold text-gray-800"
        >
          <span className="underline decoration-[#87f9e4] underline-offset-2 decoration-8">
            Latest
          </span>
        </motion.h1>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {(language === "fr" ? BlogDataFr : BlogData)?.map((blog, index) => (
          <Link
            key={blog.button_value + index}
            href={{
              pathname: "/blog-detail",
              query: {
                blog: blog?.button_value,
              },
            }}
            style={{ textDecoration: "none" }}
          >
            <div
              key={index}
              className="relative bg-white shadow-2xl rounded-lg p-6 hover:shadow-lg transition group"
            >
              <motion.p
                // variants={rightToLeftAnimation}
                className="text-gray-500 text-sm mb-3 flex items-center"
              >
                <span className="mr-2">📅</span>
                {blog.date}
              </motion.p>
              <motion.h3
                variants={leftToRightAnimation}
                className="text-xl font-semibold text-gray-800 mb-4"
              >
                {blog?.post_title}
              </motion.h3>
              <motion.p
                variants={leftToRightAnimation}
                className="text-gray-600 mb-6"
              >
                {blog?.post_description}
              </motion.p>
              <motion.div className="text-blue-500 font-medium relative group">
                {blog?.button_title}
                {/* <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 group-hover:w-full transition-all"></span> */}
              </motion.div>
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </div>
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        {(language === "fr" ? BlogDataFr : BlogData)?.map((blog, index) => {
          return (
            <>
              {blog?.button && (
                <Link
                  key={blog?.button_value + index}
                  href={blog?.button_value}
                >
                  <Button
                    title={blog?.button || ""}
                    className="mb-4 sm:mb-0 sm:mx-2"
                  />
                </Link>
              )}
            </>
          );
        })}
      </div>
    </motion.section>
  );
};

export default BlogSectionHome;
