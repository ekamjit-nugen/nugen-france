"use client";
import React, { useEffect, useState } from "react";
import { HeroSectionType } from "../Blog-page/BlogDetail";
import Image from "next/image";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on initial render
  }, []);
  return (
    <div>
      <div className="bg-white flex flex-col px-8 md:px-32 justify-center gap-4 items-center pt-14">
        <div className="text-4xl underline decoration-[#0CB8F7] font-bold">{data?.post_title}</div>
        <div className="text-lg text-[#0CB8F7]">{data?.project_category}</div>
        <div className="text-base lg:px-28 pt-8 pb-8 ">
          {data?.post_description}
        </div>
      </div>

      <div className="bg-white flex flex-col px-8 md:px-12">
        {/* Images in rows with 2 images per row on larger screens, 1 image per row on mobile */}
        <div className="flex flex-wrap gap-4 justify-center">
          {images
            .slice()
            .reverse()
            .map((img, index) => (
              <div
                key={img?.post_image + index}
                className="w-full sm:w-1/2 lg:w-[45%] "
              >
                {img?.post_image && (
                  <Image
                    src={img?.post_image}
                    alt="projectMainImage"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover cursor-pointer"
                    onClick={() => openImageModal(img.post_image)}
                  />
                )}
              </div>
            ))}
        </div>

        {/* Blog Data */}
        {blogData
          .slice()
          .reverse()
          .map((value, index) => (
            <div key={value?.post_title + index} className="">
              {value?.post_title && (
                <div className="text-xl font-bold lg:text-3xl pb-4">
                  {value?.post_title}
                </div>
              )}
              {value?.post_description && (
                <div className="text-base pb-10">{value?.post_description}</div>
              )}
            </div>
          ))}
      </div>

      {/* Modal for viewing the image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeImageModal}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected project"
              width={2000}
              height={2000}
              className="max-w-[90%] max-h-[90%] md:pl-52 object-contain"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 text-white font-bold text-xl"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
