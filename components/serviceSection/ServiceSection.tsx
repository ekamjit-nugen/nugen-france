import React from "react";
import Image from "next/image";
import Button from "../ui/ButtonNugen/butoon";
import Link from "next/link";

interface Props {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  button_title: string;
  post_title: string;
  post_image: string;
  post_description: string;
  post_icon: string;
}

interface DataType {
  data: Props[];
  dataup: Props;
}

export default function ServiceSection({ data, dataup }: DataType) {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center py-16 gap-4">
        <p className="text-[#0CB8F7] text-lg font-medium">
          {dataup?.post_title}
        </p>
        <p className="font-bold text-4xl lg:text-5xl">
          Website creation E-commerce
        </p>
      </div>

      <div className="py-4 lg:px-8">
        {data
          ?.slice()
          .reverse()
          .map((value, index) => {
            return (
              <div
                key={value.post_title + index}
                className={`${
                  index % 2 === 0
                    ? `flex flex-col md:flex-row`
                    : `flex flex-col md:flex-row-reverse`
                } py-8`}
              >
                <div className="w-full flex justify-center items-center">
                  <img
                    src={value.post_image}
                    alt="image"
                    height={400}
                    width={400}
                  />
                </div>
                <div className="w-full px-8 flex flex-col justify-center items-center gap-4">
                  <div className="text-4xl font-bold py-4">
                    {value.post_title}
                  </div>
                  <div className="text-base">{value.post_description}</div>
                </div>
              </div>
            );
          })}
      </div>

      {/* Separate Map for Button Rendering */}
      <div className="flex justify-center items-center py-8">
        {data
          ?.slice()
          .reverse()
          .map((value, index) => (
            <>
              {value.button_title && (
                <Link key={value.post_title + index} href={value.button_value}>
                  <div className="mb-4 sm:mb-0 sm:mx-2">
                    <Button
                      title={value.button_title}
                      className="mb-4 sm:mb-0 sm:mx-2"
                    />
                  </div>
                </Link>
              )}
            </>
          ))}
      </div>
    </div>
  );
}
