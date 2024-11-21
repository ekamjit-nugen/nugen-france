import React from "react";
import Button from "../ui/ButtonNugen/butoon";
import Image from "next/image";

export default function ServiceSection() {
  const data = [
    {
      image:
        "https://www.florianperrier.com/app/themes/understrap-child/images/illus/florian-perrier-developpeur-web-freelance-creation-site-e-commerce-01.svg",
      title: "Youre-commerce siteturnkey",
      Description:
        "Launching your online store is an opportunity to transform yourvision into a captivating shopping experience.An online storeoffers much more than just selling products online.It’s a digitalshowcase where your brand comes to life, reaches new horizons, andcreates lasting connections with your customers.Ready to embark onthe world of e-commerce?",
      button: "Contact Me",
    },
    {
      image:
        "https://www.florianperrier.com/app/themes/understrap-child/images/illus/florian-perrier-developpeur-web-freelance-creation-site-e-commerce-01.svg",
      title: "Youre-commerce siteturnkey",
      Description:
        "Launching your online store is an opportunity to transform yourvision into a captivating shopping experience.An online storeoffers much more than just selling products online.It’s a digitalshowcase where your brand comes to life, reaches new horizons, andcreates lasting connections with your customers.Ready to embark onthe world of e-commerce?",
      button: "Contact Me",
    },
    {
      image:
        "https://www.florianperrier.com/app/themes/understrap-child/images/illus/florian-perrier-developpeur-web-freelance-creation-site-e-commerce-01.svg",
      title: "Youre-commerce siteturnkey",
      Description:
        "Launching your online store is an opportunity to transform yourvision into a captivating shopping experience.An online storeoffers much more than just selling products online.It’s a digitalshowcase where your brand comes to life, reaches new horizons, andcreates lasting connections with your customers.Ready to embark onthe world of e-commerce?",
      button: "Contact Me",
    },
    {
      image:
        "https://www.florianperrier.com/app/themes/understrap-child/images/illus/florian-perrier-developpeur-web-freelance-creation-site-e-commerce-01.svg",
      title: "Youre-commerce siteturnkey",
      Description:
        "Launching your online store is an opportunity to transform yourvision into a captivating shopping experience.An online storeoffers much more than just selling products online.It’s a digitalshowcase where your brand comes to life, reaches new horizons, andcreates lasting connections with your customers.Ready to embark onthe world of e-commerce?",
      button: "Contact Me",
    },
  ];
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center py-16 gap-4">
        <p className="text-[#0CB8F7] text-lg font-medium">
          YOUR TURNKEY E-COMMERCE SITE
        </p>
        <p className="font-bold text-4xl lg:text-5xl">
          Website creation E-commerce
        </p>
      </div>

      <div className="py-4 lg:px-8">
        {data.map((value, index) => {
          return (
            <>
              <div
                className={`${
                  index % 2 == 0
                    ? `flex flex-col md:flex-row`
                    : `flex flex-col md:flex-row md:flex-row-reverse`
                }`}
              >
                <div className="w-full flex justify-center items-center">
                  <Image
                    src={value.image}
                    alt="image"
                    height={400}
                    width={400}
                  />
                </div>
                <div className="w-full px-8 flex flex-col justify-center items-cente gap-4">
                  <div className="text-4xl font-bold py-4">{value.title}</div>
                  <div className="text-base">{value.Description}</div>
                  <div className="">
                    <Button
                      title={value.button}
                      className="mb-4 sm:mb-0 sm:mx-2"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
