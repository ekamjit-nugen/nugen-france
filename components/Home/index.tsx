"use client";
import React from "react";
import Link from "next/link";
export interface PageContent {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value?: () => void;
  underline_text?: string;
  button_title: string;
  "img-1"?: string;
  "img-2"?: string;
  url: string;
  logo: any;
  url_text: string;
  image: any;
}

interface homeBoxData {
  header_title: string,
  header_description: string,
  animated_title: string,
  button_value: string,
  button_title: string,
  post_title: string,
  post_image: undefined,
  post_description: string,
}
export interface buttonDataType {
  header_title: string,
  header_description: string,
  animated_title: string,
  button_value: string,
  button_title: string,
  post_title: string,
  post_image: undefined,
  post_description: string
}
export interface PageProps {
  homePagedata: PageContent;
  buttonData: buttonDataType[];
  homeBoxData: homeBoxData[];
}
const HomePage: React.FC<PageProps> = ({ homePagedata, buttonData, homeBoxData }) => {

  return (
    <div className="bg-[#F8EDE2] w-full min-h-screen text-black">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center py-20 px-8 md:px-16">
        {/* Left Side: Text Content */}
        <div className="text-3xl md:text-6xl font-extrabold flex-1">
          <div className="underline decoration-sky-500 underline-offset-2">
            {homePagedata?.header_title}
          </div>
          <div>{homePagedata?.underline_text}</div>

          <div className="mt-6 text-base md:text-xl font-medium">
            <p key={homePagedata?.header_title} className="mt-2">
              {homePagedata?.header_description}
            </p>
          </div>

          <div className="mt-6 relative flex flex-wrap ">
            {buttonData?.map((value) => {
              return <>
                <button
                  key={value?.button_title}
                  className="relative inline-block bg-sky-400 text-white py-3 px-6 rounded-lg overflow-hidden text-lg font-semibold transition-all duration-300 hover:bg-sky-700 group w-full sm:w-auto mb-4 sm:mb-0 sm:mx-2"
                >
                  <span className="absolute inset-0 bg-sky-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative z-10">{value?.button_title}</span>
                </button>
              </>
            })

            }
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 mt-8 md:mt-0 md:block hidden">
          <img
            src={homePagedata?.image}
            alt="Computer Display"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section 2: Three Columns */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeBoxData?.map((value) => {
            return <>
              <Link
                href={value?.button_value}
                key={value?.post_title}
                style={{ textDecoration: "none" }}
              >
                <div className="p-8 bg-white hover:bg-[#0FB8F7] hover:text-white rounded-lg shadow-2xl text-center transition-all duration-300 h-[500px] flex flex-col">
                  <div>
                    <div className="text-blue-500 text-6xl mb-4">
                      {value?.post_image}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {value?.post_title}
                    </h3>
                    <p className="text-clip overflow-hidden">
                      {value?.post_description}
                    </p>
                  </div>
                </div>
              </Link>
            </>
          })

          }
        </div>
      </div>
    </div>
  );
};

export default HomePage;
