"use client";
import React, { useEffect, useState } from "react";
import { PageContent } from "../Home";
import Link from "next/link";
import { RECENT_ARTICLES_ENG } from "@/lib/language/en";
import { RECENT_ARTICLES_FR } from "@/lib/language/fr";
export interface HeroSectionType {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  post_title: string;
  post_image: string;
  post_description: string;
  project_category?: string;
  date: string;
  button_title: string;
}

interface HeroSectionPageType {
  data?: HeroSectionType;
  blogData: HeroSectionType[];
  socialData: PageContent[];
  RelatedPost: HeroSectionType[];
  RelatedPostfr: HeroSectionType[];
}
export default function BlogDetail({
  data,
  blogData,
  socialData,
  RelatedPost,
  RelatedPostfr,
}: HeroSectionPageType) {
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
    <div className="py-16 bg-white">
      <div className="text-center text-4xl font-bold xl:text-5xl font-sans py-8 px-8 md:px-32">
        {data?.post_title}
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4 px-8 md:px-32 ">
        <div className="w-full flex flex-col gap-4">
          <div className="flex gap-2 text-sky-400">
            <div className="">📅</div>
            <div className="">{data?.date}</div>
          </div>
          <img src={data?.post_image} alt="image" />
          {/* <div className="">{data?.post_description}</div> */}
          {blogData
            ?.slice()
            .reverse()
            .map((value, index) => (
              <div
                className="flex flex-col gap-2"
                key={value?.post_title + index}
              >
                <div className="text-2xl font-bold">{value?.post_title}</div>
                <p className="text-base">{value?.post_description}</p>
              </div>
            ))}
        </div>

        <div className=" w-full lg:w-1/3 py-8 lg:px-4 flex flex-col gap-4">
          {/* <div className="flex flex-col gap-1">
            <div className=" text-base lg:text-2xl font-bold">
              Need a freelance web developer?
            </div>
            <div className="text-base">
              You want to create a website and you are looking for a freelance
              developer? Call me and contact me now
            </div>
          </div> */}
          <div className="flex flex-col gap-1">
            <div className=" text-base lg:text-2xl font-bold">
              {language === "fr" ? RECENT_ARTICLES_FR : RECENT_ARTICLES_ENG}{" "}
            </div>
            {(language === "fr" ? RelatedPostfr : RelatedPost)?.map((item) => (
              <Link
                key={item?.button_value}
                href={{
                  pathname: "/blog-detail",
                  query: {
                    blog: item?.button_value,
                  },
                }}
              >
                <div className="text-base cursor-pointer">
                  {item.post_title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
