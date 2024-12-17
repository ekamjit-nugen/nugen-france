"use client";
import React, { useEffect, useState } from "react";
import { homeBoxData } from "../Home";
import Button from "../ui/ButtonNugen/butoon";
import Link from "next/link";
import { useLanguage } from "@/lib/common/useLanguage";
interface ContactUsType {
  header_title: string;
  header_description: string;
  animated_title: string;
  contact_title: string;
  contact_description: string;
  contact_location_title: string;
  contact_location: string;
  contact_us_title: string;
  mobile_number: string;
  email_title: string;
  email_id: string;
  map_view: any;
  contact_image: string;
  footer_logo: string;
  footer_description: string;
  follow_us: string;
  "facebook-url": string;
  "instagram-url": string;
  "linkedin-url": string;
  twitter_url: string;
  email_url: string;
  upwork_url: string;
}
interface ContactUsPropsType {
  props: ContactUsType;
  buttons: homeBoxData[];
  propsfr: ContactUsType;
  buttonsfr: homeBoxData[];
}
const ContactPage = ({
  props,
  buttons,
  propsfr,
  buttonsfr,
}: ContactUsPropsType) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white px-4 md:px-0 items-center pt-10">
      <div className="w-full mb-12">
        <h1 className="text-4xl font-bold text-center mb-4">
          {language === "fr" ? propsfr?.animated_title : props?.animated_title}
        </h1>
      </div>

      <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
        <div className="w-full md:w-2/3">
          <div className="flex flex-col sm:flex-row gap-4 pl-6">
            {(language === "fr" ? buttonsfr : buttons)?.map((action, index) => (
              <Button
                key={index}
                title={action.button_title}
                className="mb-4 sm:mb-0 sm:mx-2"
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col text-gray-700 justify-end md:p-4">
          <p className="mb-4  font-bold">
            {language === "fr"
              ? propsfr?.header_description
              : props?.header_description}
          </p>
          <p className="mb-2 text-xl font-bold underline">
            {language === "fr"
              ? propsfr?.contact_location_title
              : props?.contact_location_title}
          </p>
          <Link
            href={`map:${
              language === " fr"
                ? propsfr?.contact_location
                : props?.contact_location
            }`}
          >
            <p className="mb-2">
              {language === "fr"
                ? propsfr?.contact_location
                : props?.contact_location}
            </p>
          </Link>
          <p className="mb-2 font-bold text-xl underline">
            {language === "fr" ? propsfr?.email_title : props?.email_title}
          </p>
          <Link
            href={`mailto:${
              language === " fr" ? propsfr?.email_id : props?.email_id
            }`}
          >
            <p className="mb-2 ">
              {language === "fr" ? propsfr?.email_id : props?.email_id}
            </p>
          </Link>
          <p className="mb-2 font-bold text-xl underline">
            {language === "fr"
              ? propsfr?.contact_us_title
              : props?.contact_us_title}
          </p>
          <Link
            href={`tel:${
              language === " fr" ? propsfr?.mobile_number : props?.mobile_number
            }`}
          >
            <p className="mb-2">
              {language === "fr"
                ? propsfr?.mobile_number
                : props?.mobile_number}
            </p>
          </Link>
        </div>
      </div>

      <div className="w-full h-96 border rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13721.511587175674!2d76.6046931!3d30.7070028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5dbe6c39f7%3A0x631f8a56ded3b61d!2sC-196%2FA%2C%20Time%20Square%20Building%2C%20Ground%20Floor%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160071!5e0!3m2!1sen!2sin!4v1697740000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
