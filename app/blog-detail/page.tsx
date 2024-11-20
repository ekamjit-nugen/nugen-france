import BlogDetail from '@/components/Blog-page/BlogDetail'
import QuestionSection from '@/components/projects/QuestionSection'
import { PagesData } from '@/lib/common-api/common';
import React from 'react'

export default async function NugenBlog() {

  const data = await PagesData("access-to-expert-knowledge");
  const datalength = data?.length;
  const RelatedPost = await PagesData("blog");
  const socialData = await PagesData("social-media");
  return (
    <div>
      <BlogDetail data={data[datalength - 1]} blogData={data} socialData={socialData} RelatedPost={RelatedPost}/>
      <QuestionSection/>
    </div>
  )
}
