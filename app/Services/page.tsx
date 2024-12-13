import React from "react";
import ServicesPage from "@/components/Home/services";
import { PagesData } from "@/lib/common-api/common";

const ServicePages = async () => {
  const servicesBox = await PagesData("services-section");
  const servicesBoxFr = await PagesData("services-section-fr");

  return (
    <>
      <ServicesPage ServicesData={servicesBox} ServicesDataFr={servicesBoxFr} />
    </>
  );
};
export default ServicePages;
