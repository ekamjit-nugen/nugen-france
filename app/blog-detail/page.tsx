import React from "react";
import BlogDetail from "@/components/Blog-page/BlogDetail";
import QuestionSection from "@/components/projects/QuestionSection";
import { PagesData } from "@/lib/common-api/common";
import { getPageBySlug } from "@/lib/wordpress";

export default async function NugenBlog({ searchParams }: any) {
  const id = searchParams?.blog;

  const data = await PagesData(id);
  const datalength = data?.length;
  const RelatedPost = await PagesData("blog");
  const RelatedPostfr = await PagesData("blog-fr");
  const socialData = await PagesData("social-media");
  //Question Section
  const questionPageData = await getPageBySlug("questions");
  const QuestionPageAcf = questionPageData.acf;
  const questionPageDataFr = await getPageBySlug("questions-fr");
  const QuestionPageFrAcf = questionPageDataFr.acf;
  return (
    <div>
      <BlogDetail
        data={data[datalength - 1]}
        blogData={data}
        socialData={socialData}
        RelatedPost={RelatedPost}
        RelatedPostfr={RelatedPostfr}
      />
      <QuestionSection data={QuestionPageAcf} dataFr={QuestionPageFrAcf} />
    </div>
  );
}
