import ServiceSection from "@/components/serviceSection/ServiceSection";
import { PagesData } from "@/lib/common-api/common";
import React from "react";

export default async function NugenServices() {
  const data = await PagesData("custom-web-development"); // pass query per...
  const datalength = data?.length;
  return (
    <div>
      <ServiceSection data={data} dataup={data[datalength - 1]}/>
    </div>
  );
}
