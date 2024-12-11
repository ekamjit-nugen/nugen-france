import React from "react";
import { HeroSectionType } from "../Blog-page/BlogDetail";

interface post_image {
  post_image: string;
}
interface HeroSectionPageType {
  data?: HeroSectionType;
  blogData: HeroSectionType[];
  images: post_image[];
}
export default function Projects({
  data,
  blogData,
  images,
}: HeroSectionPageType) {
  return (
    <div>
      <div className="bg-white flex flex-col px-8 md:px-32 justify-center gap-4 items-center">
        <div className="text-4xl">{data?.post_title}</div>
        <div className="text-lg text-[#0CB8F7]">{data?.project_category}</div>
        <div className="text-base lg:px-28 pt-8 pb-8 ">
          {data?.post_description}
        </div>
      </div>

      <div className="bg-white flex flex-col gap-2 px-8 md:px-32">
        {images
          .slice()
          .reverse()
          .map((img, index) => {
            return (
              <>
                {img?.post_image && (
                  <img
                    key={img?.post_image + index}
                    src={img?.post_image}
                    alt="projectMainImage"
                  />
                )}
              </>
            );
          })}
        {blogData
          .slice()
          .reverse()
          .map((value, index) => {
            return (
              <>
                {value.post_title && value.post_description && (
                  <div key={value?.post_title + index} className="py-4">
                    <div className="text-xl font-bold lg:text-3xl pb-4">
                      {value?.post_title}
                    </div>
                    <div className="text-base">{value?.post_description}</div>
                  </div>
                )}
              </>
            );
          })}
      </div>
    </div>
  );
}
