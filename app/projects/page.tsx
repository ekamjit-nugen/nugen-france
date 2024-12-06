import React from "react";
import Projects from "@/components/projects";
import QuestionSection from "@/components/projects/QuestionSection";
import { PagesData } from "@/lib/common-api/common";

export default async function nugenProject() {
  const data = await PagesData("simply5");
  const datalength = data?.length;
  const imagessss = await Promise.all(
    data.map(async (item) => {
      const value = item?.post_image;
      return { post_image: value };
    })
  );
  return (
    <>
      <Projects
        data={data[datalength - 1]}
        images={imagessss}
        blogData={data}
      />
      <QuestionSection />
    </>
  );
}
