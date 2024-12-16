"use client";
import React, { useEffect } from "react";
import Button from "../ui/ButtonNugen/butoon";
import {
  EMAIL_FR,
  FULL_NAME_FR,
  LAST_NAME_FR,
  MOBILE_FR,
  SENDING_FR,
  SUBMIT_FR,
  YOUR_MESSAGE_FR,
} from "@/lib/language/fr";
import {
  EMAIL_ENG,
  FULL_NAME_ENG,
  LAST_NAME_ENG,
  MOBILE_ENG,
  SUBMIT_ENG,
  YOUR_MESSAGE_ENG,
} from "@/lib/language/en";
import { useLanguage } from "@/lib/common/useLanguage";

interface Dataa {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  button_title: string;
}
interface HeroSectionPageType {
  data?: Dataa;
  dataFr?: Dataa;
}

export default function QuestionSection({ data, dataFr }: HeroSectionPageType) {
  const { language } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on initial render
  }, []);

  return (
    <div className="bg-[#DBE2F7] px-8 md:px-28 py-10">
      <div className="text-black bg-white rounded-3xl py-10">
        <div className="p-4 text-center">
          <div className="flex justify-center items-center pt-8 text-[#0CB8F7] text-lg font-bold ">
            {language === "fr" ? dataFr?.header_title : data?.header_title}
          </div>
          <div className="flex justify-center items-center pt-2 text-2xl lg:text-4xl font-bold">
            {language === "fr"
              ? dataFr?.header_description
              : data?.header_description}
          </div>
          <div className="flex justify-center items-center text-base pt-2 px-4">
            {language === "fr" ? dataFr?.animated_title : data?.animated_title}
          </div>
          <div className="flex justify-center items-center text-base pt-2 px-4">
            {language === "fr" ? dataFr?.button_title : data?.button_title}
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4 px-12 lg:px-32 xl:px-56">
          <div className="flex flex-col md:flex-row gap-4 ">
            <div className="border-2 px-2 w-full rounded-2xl">
              <input
                type="text"
                placeholder={language === "fr" ? FULL_NAME_FR : FULL_NAME_ENG}
                className="py-3 w-full outline-none bg-white"
              />
            </div>
            <div className="border-2 px-2 w-full rounded-2xl">
              <input
                type="text"
                placeholder={language === "fr" ? LAST_NAME_FR : LAST_NAME_ENG}
                className="py-3 w-full outline-none bg-white"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 ">
            <div className="border-2 px-2 w-full rounded-2xl">
              <input
                type="text"
                placeholder={language === "fr" ? EMAIL_FR : EMAIL_ENG}
                className="py-3 w-full outline-none bg-white"
              />
            </div>
            <div className="border-2 px-2 w-full rounded-2xl">
              <input
                type="text"
                placeholder={language === "fr" ? MOBILE_FR : MOBILE_ENG}
                className="py-3 w-full outline-none bg-white"
              />
            </div>
          </div>
          <div className="border-2 px-2 w-full h-40 rounded-2xl">
            <textarea
              placeholder={
                language === "fr" ? YOUR_MESSAGE_FR : YOUR_MESSAGE_ENG
              }
              className="py-3 w-full outline-none h-full bg-white"
            />
          </div>
            <Button
              title={language === "fr" ? SUBMIT_FR : SUBMIT_ENG}
              className="mb-4 sm:mb-0 sm:mx-2 w-40 justify-center items-center"
            />
        </div>
      </div>
    </div>
  );
}
