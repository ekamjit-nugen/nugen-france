import React from "react";
import HomePage from "@/components/Home";
import About from "@/components/Home/About";
import ServicesPage from "@/components/Home/services";
import CallToAction from "@/components/Home/contactme";
import SkillsSection from "@/components/Home/skillsSection";
import BlogSectionHome from "@/components/Home/blog";
import TestimonialPage from "@/components/Home/Testimonial";
import Achievements from "@/components/Home/Achievements";
import { imageLink, PagesData } from "@/lib/common-api/common";
import { getPageBySlug } from "@/lib/wordpress";

const Home = async () => {
  const aboutpagedata = await getPageBySlug("about");
  const aboutimage1 = await imageLink(aboutpagedata?.acf?.["img-1"]);
  const aboutimage2 = await imageLink(aboutpagedata?.acf?.["img-2"]);
  const aboutpageContent = { ...aboutpagedata?.acf, "img-1": aboutimage1, "img-2": aboutimage2 };
  const homepagedata = await getPageBySlug("home");
  const homeimage1 = await imageLink(homepagedata?.acf?.logo);
  const homeimage2 = await imageLink(homepagedata?.acf?.image);
  const homepageContent = { ...homepagedata?.acf, logo: homeimage1, image: homeimage2 };
  const homePostButton=await PagesData("home-buttons")  
  const homeBox=await PagesData("home-box")  
  return (
    <>
      <HomePage homePagedata={homepageContent} buttonData={homePostButton} homeBoxData={homeBox}/>
      <About aboutPagedata={aboutpageContent} />
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
