import ServiceSection from "@/components/serviceSection/ServiceSection";
import { PagesData } from "@/lib/common-api/common";
import React from "react";

export default async function NugenServices({searchParams}: any) {
  const id = searchParams?.service;
  const data = await PagesData(id || "custom-web-development"); 
  const datalength = data?.length;
  return (
    <div>
      <ServiceSection data={data} dataup={data[datalength - 1]}/>
    </div>
  );
}
