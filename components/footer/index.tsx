"use client";
import React, { useEffect, useState } from "react";

interface FooterProps {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  button_title: string;
  email?: string;
  mobile?: string;
  locution?: string;
  post_title: string;
  post_image: string | undefined;
  post_description: string;
  post_icon: string;
  footer_logo: string;
  footer_description: string;
  title?: string;
  footer_copyright?: string;
}
interface LinkProps {
  header_title?: string;
  header_description?: string;
  animated_title?: string;
  button_value?: string;
  button_title?: string;
  locution?: string;
  title?: string;
  mobile?: string;
  email?: string;
}
interface PropsType {
  contactUs: LinkProps;
  contactUsFr: LinkProps;
  footermain: FooterProps[];
  footerMianFr: FooterProps[];
  footerPrivicy: FooterProps[];
  footerServices: FooterProps[];
  footerServicesFr: FooterProps[];
  footerPrivicyFr: FooterProps[];
}

const Footer: React.FC<PropsType> = ({
  contactUs,
  contactUsFr,
  footermain,
  footerMianFr,
  footerServices,
  footerServicesFr,
  footerPrivicy,
  footerPrivicyFr,
}) => {
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
    <>
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-start">
              <img
                src={
                  language === "fr"
                    ? footerMianFr[0].post_image
                    : footermain[0].post_image
                }
                alt="Logo"
                className="w-auto h-24"
              />
              <div className="text-lg">
                {language === "fr"
                  ? footerMianFr[0].post_description
                  : footermain[0].post_description}
              </div>
            </div>

            <div className="w-full md:w-3/4 flex flex-wrap gap-6">
              {(language === "fr" ? footerServicesFr : footerServices)?.map(
                (value, index) => (
                  <div
                    key={value?.post_title + index}
                    className="w-full md:w-1/4"
                  >
                    <h4 className="font-bold text-lg pt-2 underline">{value?.title}</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="hover:underline">
                          {value?.button_title}
                        </a>
                      </li>
                    </ul>
                  </div>
                )
              )}

              {/* Footer Privacy */}
              {(language === "fr" ? footerPrivicyFr : footerPrivicy)?.map(
                (value, index) => (
                  <div
                    key={value?.post_title + index}
                    className="w-full md:w-1/4 "
                  >
                    <h4 className="font-bold text-lg underline">{value?.title}</h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="hover:underline pt-2">
                          {value?.button_title}
                        </a>
                      </li>
                    </ul>
                  </div>
                )
              )}

              {/* Contact Us Section */}
              <div className="w-full md:w-1/3 ">
                {contactUs?.title && (
                  <div className="font-bold text-lg underline">
                    {language === "fr" ? contactUsFr?.title : contactUs?.title}
                  </div>
                )}
                <ul className="space-y-2 pt-2">
                  {contactUs?.locution && (
                    <li>
                      <a className="hover:underline">
                        {language === "fr"
                          ? contactUsFr?.locution
                          : contactUs?.locution}
                      </a>
                    </li>
                  )}
                  {contactUs?.email && (
                    <li>
                      <a
                        href={
                          "mailto:" + language === "fr"
                            ? contactUsFr?.email
                            : contactUs?.email
                        }
                        className="hover:underline"
                      >
                        {language === "fr"
                          ? contactUsFr?.email
                          : contactUs?.email}
                      </a>
                    </li>
                  )}
                  {contactUs?.mobile && (
                    <li>
                      <a
                        href={
                          "tel:" + language === "fr"
                            ? contactUsFr?.mobile
                            : contactUs?.mobile
                        }
                        className="hover:underline"
                      >
                        {language === "fr"
                          ? contactUsFr?.mobile
                          : contactUs?.mobile}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer copyright rendering */}
        {footermain.length > 0 && footermain[0]?.footer_copyright && (
          <div className="container mx-auto border-t border-gray-700 mt-8 pt-4">
            <p className="text-center text-sm text-gray-400">
              {language === "fr"
                ? footerMianFr[0]?.footer_copyright
                : footermain[0]?.footer_copyright}
            </p>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
