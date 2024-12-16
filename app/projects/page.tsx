import React from "react";
import Projects from "@/components/projects";
import QuestionSection from "@/components/projects/QuestionSection";
import { PagesData } from "@/lib/common-api/common";
import { getPageBySlug } from "@/lib/wordpress";

export default async function nugenProject({ searchParams }: any) {
  const id = searchParams?.id;
  const data = await PagesData(id);
  const datalength = data?.length;
  const imagessss = await Promise.all(
    data.map(async (item) => {
      const value = item?.post_image;
      return { post_image: value };
    })
  );

//Question Section 
const questionPageData = await getPageBySlug("questions");
const QuestionPageAcf = questionPageData.acf
const questionPageDataFr = await getPageBySlug("questions-fr");
const QuestionPageFrAcf = questionPageDataFr.acf

  return (
    <>
      <Projects
        data={data[datalength - 1]}
        images={imagessss}
        blogData={data}
      />
      <QuestionSection data={QuestionPageAcf} dataFr={QuestionPageFrAcf}/>
    </>
  );
}
