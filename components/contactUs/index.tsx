"use client";
import React from "react";
import { buttonDataType } from "../Home";
import Button from "../ui/ButtonNugen/butoon";
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
  buttons: buttonDataType[];
}
const ContactPage = ({ props, buttons }: ContactUsPropsType) => {
  return (
    <div className="container mx-auto px-4 md:px-0 items-center mt-24">
      <div className="w-full mb-12">
        <h1 className="text-4xl font-bold text-center mb-4">
          {props?.animated_title}
        </h1>
        {/* <div className="text-center text-gray-500">
          <span>{data.home}</span> <span className="mx-2">›</span>
          <span>{data.current}</span>
        </div> */}
      </div>

      <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
        <div className="w-full md:w-2/3">
          {/* <h2 className="text-2xl font-semibold mb-4">I wish</h2> */}
          <div className="flex gap-4">
            {buttons.map((action, index) => (
              <Button
                key={index}
                title={action.button_title}
                className="mb-4 sm:mb-0 sm:mx-2"
              />
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div className="w-full md:w-1/3 flex flex-col text-gray-700 justify-end md:p-4">
          <h2 className="mb-4 text-sm font-bold">
            {props?.header_description}
          </h2>
          <p className="mb-2">{props?.contact_location}</p>
          <p className="mb-2">{props?.email_id}</p>
          <p className="mb-2">{props?.mobile_number}</p>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="w-full h-96 border rounded-lg overflow-hidden">
        <iframe
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999485186471!2d2.368435315675206!3d48.86378877928767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1fd5472b4d%3A0x8cfe577b6ff3f893!2s242%20Bd%20Voltaire%2C%2075011%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1604939131748!5m2!1sen!2sfr"
          }
          width="100%"
          height="100%"
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
