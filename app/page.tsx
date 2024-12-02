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

const fs = require("fs");

const Home = async () => {
  const aboutpagedata = await getPageBySlug("about");
  const homePostButton = await PagesData("home-buttons");
  const homepagedataFr = await getPageBySlug("home-fr");
  const homeimage1Fr = await imageLink(homepagedataFr?.acf?.logo);
  const homeimage2Fr = await imageLink(homepagedataFr?.acf?.image);
  const homepageContentfr = {
    ...homepagedataFr?.acf,
    logo: homeimage1Fr,
    image: homeimage2Fr,
  };
  const homePostDatafr = {
    apiName: "home",
    home: homepageContentfr,
  };

  fs.writeFileSync(
    "./messages/fn.json",
    JSON.stringify(homePostDatafr, null, 2),
    "utf-8"
  );
  const homepagedata = await getPageBySlug("home");
  const homeimage1 = await imageLink(homepagedata?.acf?.logo);
  const homeimage2 = await imageLink(homepagedata?.acf?.image);
  const homepageContent = {
    ...homepagedata?.acf,
    logo: homeimage1,
    image: homeimage2,
  };
  const homePostDataWithApiName = {
    apiName: "home",
    home: homepageContent,
  };

  fs.writeFileSync(
    "./messages/en.json",
    JSON.stringify(homePostDataWithApiName, null, 2),
    "utf-8"
  );
  const aboutimage1 = await imageLink(aboutpagedata?.acf?.["img-1"]);
  const aboutimage2 = await imageLink(aboutpagedata?.acf?.["img-2"]);
  const aboutpageContent = {
    ...aboutpagedata?.acf,
    "img-1": aboutimage1,
    "img-2": aboutimage2,
  };

  const homeBox = await PagesData("home-box");
  const BlogData = await PagesData("blog");
  const servicesBox = await PagesData("services-section");
  const CallToActionData = await PagesData("call-to-action");
  const callToActFirst = CallToActionData?.[0];
  const callToActSecond = CallToActionData?.[1];
  const TestimonialData = await PagesData("testimonials");
  const Skills = await PagesData("skills");
  const skilllogo = await PagesData("skilllogo");
  const skillsdata = await PagesData("skillsdata");
  const skillImage = await getPageBySlug("skills");
  const skillImage1 = await imageLink(skillImage?.acf?.image);
  const skillContent = {
    ...skillImage?.acf,
    image: skillImage1,
  };
  const achievementdata = await PagesData("project-section");
  return (
    <>
      <HomePage
        homePagedata={homepageContent}
        buttonData={homePostButton}
        homeBoxData={homeBox}
      />
      <About aboutPagedata={aboutpageContent} />
      <Achievements data={achievementdata} />
      <CallToAction data={CallToActionData} />
      <ServicesPage ServicesData={servicesBox} />
      <SkillsSection
        skillBars={Skills}
        skillIcons={skilllogo}
        skillData={skillsdata}
        mainImage={skillContent}
      />
      <TestimonialPage data={TestimonialData} />
      <CallToAction data={CallToActionData} />
      <BlogSectionHome BlogData={BlogData} />
    </>
  );
};
export default Home;
