import React from "react";
import BlogPage from "@/components/Blog-page";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { PagesData } from "@/lib/common-api/common";

export default async function Blog() {
  const BlogData = await PagesData("blog");  
  return (
    <>
      {/* <ScreenAnimation /> */}
      <BlogPage BlogData={BlogData}/>
    </>
  );
}
