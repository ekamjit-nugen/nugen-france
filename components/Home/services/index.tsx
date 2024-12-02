"use client";
import React from "react";
import Link from "next/link";
import Button from "@/components/ui/ButtonNugen/butoon";
import { homeBoxData } from "..";
export interface PageProps {
  ServicesData: homeBoxData[];
}
function ServicesPage({ ServicesData }: PageProps) {
  return (
    <div className="bg-white py-16 px-8 md:px-2">
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

      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cards */}
        {ServicesData?.map((service, index) => (
          <Link
            key={service.button_value + index}
            href={{
              pathname: "/service-section",
              query: {
                service: service?.button_value,
              },
            }}
            style={{ textDecoration: "none" }}
          >
            <div className="p-6 bg-white group hover:bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:text-black rounded-lg shadow-2xl text-center h-[450px] flex flex-col">
              <div className="flex-grow">
                <div className="text-blue-500 text-5xl mb-4">
                  {service?.post_icon}
                </div>
                <h3 className="text-xl font-bold mb-4 ">
                  {service?.post_title}
                </h3>
                <div className="text-left max-h-64">
                  <p className="text-base mb-2 text-wrap">
                    {service?.post_description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button title={"Contact Me"} className="mb-4 sm:mb-0 sm:mx-2" />
      </div>
    </div>
  );
}

export default ServicesPage;
