"use client";
import React from "react";

interface FooterProps {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  button_title: string;
  post_title: string;
  post_image: string | undefined;
  post_description: string;
  post_icon: string;
  footer_logo: string;
  footer_description: string;
  title: string;
  footer_copyright?: string;
}

interface PropsType {
  contactUs: FooterProps[];
  footermain: FooterProps[];
  footerPrivicy: FooterProps[];
  footerServices: FooterProps[];
}

const Footer: React.FC<PropsType> = ({
  contactUs,
  footermain,
  footerServices,
  footerPrivicy,
}) => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-16 ">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-wrap justify-between items-start">
            <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-start">
              {footermain.length > 0 && footermain[0].post_image && (
                <img
                  src={footermain[0].post_image}
                  alt="Logo"
                  className="w-auto h-auto mr-4 mb-4"
                />
              )}
              <div className="text-lg mb-4">
                {footermain[0].post_description}
              </div>
            </div>

            <div className="w-full md:w-3/4 flex flex-wrap gap-6">
              {footerServices.map((value, index) => (
                <div key={value?.post_title + index} className="w-full md:w-1/4">
                  <h4 className="font-bold text-lg mb-3">{value?.title}</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:underline">
                        {value?.button_title}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}

              {/* Footer Privacy */}
              {footerPrivicy.map((value, index) => (
                <div key={value?.post_title + index} className="w-full md:w-1/4 ">
                  <h4 className="font-bold text-lg mb-3">{value?.title}</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="hover:underline">
                        {value?.button_title}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}

              {/* Contact Us Section */}
              {contactUs
                .slice()
                .reverse()
                .map((data, index) => (
                  <div key={index} className="w-full md:w-1/3 ">
                    {data?.title && (
                      <div className="font-bold text-lg mb-3">
                        {data?.title}
                      </div>
                    )}
                    <ul className="space-y-2">
                      {data?.button_title && (
                        <li>
                          <a
                            href={data?.button_value}
                            className="hover:underline"
                          >
                            {data?.button_title}
                          </a>
                        </li>
                      )}
                      {/* Display email and phone */}
                      {data?.post_description && (
                        <li className="text-sm text-gray-400">
                          {data?.post_description}
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Footer copyright rendering */}
        {footermain.length > 0 && footermain[0]?.footer_copyright && (
          <div className="container mx-auto border-t border-gray-700 mt-8 pt-4">
            <p className="text-center text-sm text-gray-400">
              {footermain[0]?.footer_copyright}
            </p>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
