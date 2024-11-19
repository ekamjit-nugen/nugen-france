import React from "react";
import HomePage from "@/components/Home";
import About from "@/components/Home/About";
import ServicesPage from "@/components/Home/services";
import CallToAction from "@/components/Home/contactme";
import SkillsSection from "@/components/Home/skillsSection";
import BlogSectionHome from "@/components/Home/blog";
import TestimonialPage from "@/components/Home/Testimonial";
import Achievements from "@/components/Home/Achievements";
import { imageLink } from "@/lib/common-api/common";
import { getPageBySlug } from "@/lib/wordpress";

const Home = async () => {
  const pageCont = await getPageBySlug("about");
  console.log(pageCont, "pageCont");
  
  const images = await imageLink(pageCont?.acf?.image);
  const pageContent = { ...pageCont, image: images };
  console.log(pageContent, "pageContent");

  return (
    <>
      <HomePage />
      <About />
      <Achievements />
      <CallToAction />
      <ServicesPage />
      <SkillsSection />
      <TestimonialPage />
      <CallToAction />
      <BlogSectionHome />
    </>
  );
};
export default Home;
