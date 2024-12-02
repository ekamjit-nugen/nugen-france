import React from "react";
import ServicesPage from "@/components/Home/services";
import { PagesData } from "@/lib/common-api/common";


const ServicePages = async () => {
  
  const servicesBox = await PagesData("services-section");

  return (
    <>
      <ServicesPage ServicesData={servicesBox} />
    </>
  );
};
export default ServicePages;
