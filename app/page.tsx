import React from "react";
import ServicesPage from "@/components/Home/services";
import SkillsSection from "@/components/Home/skillsSection";
import BlogSectionHome from "@/components/Home/blog";
import TestimonialPage from "@/components/Home/Testimonial";
import { imageLink, PagesData } from "@/lib/common-api/common";
import { getPageBySlug } from "@/lib/wordpress";
import InterestedSection from "@/components/Home/Hire";
import InterviewAmico from "../components/icons/png/Interview-amico.svg";
import dynamic from "next/dynamic";
import CloudPlatform from "@/components/It";

const Homepage = dynamic(() => import("../components/Home/index"), {
  ssr: false,
});
const Aboutpage = dynamic(() => import("../components/Home/About"), {
  ssr: false,
});
const Achievements = dynamic(() => import("../components/Home/Achievements"), {
  ssr: false,
});
const ContactUs = dynamic(() => import("../components/Home/contactme"), {
  ssr: false,
});

const fs = require("fs");

const Home = async () => {
  const homePostButton = await PagesData("home-buttons");
  const homePostButtonfr = await PagesData("home-buttons-fr");
  const homepagedataFr = await getPageBySlug("home-fr");
  const homeimage1Fr = await imageLink(homepagedataFr?.acf?.logo);
  const homeimage2Fr = await imageLink(homepagedataFr?.acf?.image);
  const homepageContentfr = {
    ...homepagedataFr?.acf,
    logo: homeimage1Fr,
    image: homeimage2Fr,
  };
  const homepagedata = await getPageBySlug("home");
  const homeimage1 = await imageLink(homepagedata?.acf?.logo);
  const homeimage2 = await imageLink(homepagedata?.acf?.image);
  const homepageContent = {
    ...homepagedata?.acf,
    logo: homeimage1,
    image: homeimage2,
  };
  const aboutpagedata = await getPageBySlug("about");
  const aboutimage1 = await imageLink(aboutpagedata?.acf?.["img-1"]);
  const aboutimage2 = await imageLink(aboutpagedata?.acf?.["img-2"]);
  const aboutpageContent = {
    ...aboutpagedata?.acf,
    "img-1": aboutimage1,
    "img-2": aboutimage2,
  };
  const aboutpagedataFr = await getPageBySlug("about-fr");
  const aboutimage1fr = await imageLink(aboutpagedataFr?.acf?.["img-1"]);
  const aboutimage2fr = await imageLink(aboutpagedataFr?.acf?.["img-2"]);
  const aboutpageContentFr = {
    ...aboutpagedataFr?.acf,
    "img-1": aboutimage1fr,
    "img-2": aboutimage2fr,
  };
  const CallToActionData = await PagesData("call-to-action");
  const CallToActionDataFr = await PagesData("call-to-action-fr");
  const callToActFirst = CallToActionData?.[0];
  const callToActSecond = CallToActionData?.[1];
  const homeBox = await PagesData("home-box");
  const homeBoxFr = await PagesData("home-box-fr");
  const BlogData = await PagesData("blog");
  const BlogDataFr = await PagesData("blog-fr");
  const servicesBox = await PagesData("services-section");
  const servicesBoxFr = await PagesData("services-section-fr");
  const TestimonialData = await PagesData("testimonial");
  const TestimonialDataFr = await PagesData("testimonial-fr");
  const Skills = await PagesData("skills");
  const SkillsFr = await PagesData("skills-fr");  
  const skilllogo = await PagesData("skilllogo");
  const skillsdata = await PagesData("skillsdata");
  const skillsdatafr = await PagesData("skillsdata-fr");
  const skillImage = await getPageBySlug("skills");
  const skillImage1 = await imageLink(skillImage?.acf?.image);
  const skillContent = {
    ...skillImage?.acf,
    image: skillImage1,
  };
  const achievementdata = await PagesData("project-section");
  const datalength = achievementdata?.length;
  const achievementdataFr = await PagesData("project-section-fr");
  const workWithUs = await getPageBySlug("work-with-us");
  const workImage1 = await imageLink(workWithUs?.acf?.image);
  const workContent = {
    ...workWithUs?.acf,
    image: workImage1,
  };
  const workWithUsFr = await getPageBySlug("work-with-us-fr");
  const workImage1Fr = await imageLink(workWithUsFr?.acf?.image);
  const workContentFr = {
    ...workWithUsFr?.acf,
    image: workImage1Fr,
  };

  return (
    <>
      <Homepage
        homePagedata={homepageContent}
        homePagedatafr={homepageContentfr}
        buttonData={homePostButton}
        buttonDatafr={homePostButtonfr}
        homeBoxData={homeBox}
        homeBoxDataFr={homeBoxFr}
      />
      <Aboutpage
        aboutPagedata={aboutpageContent}
        aboutPagedatafr={aboutpageContentFr}
      />
      <Achievements data={achievementdata} buttonData={achievementdata[datalength-1]} buttonDataFr={achievementdataFr[datalength-1]} datafr={achievementdataFr} />
      <ContactUs datafr={CallToActionDataFr} data={CallToActionData} />
      <ServicesPage ServicesDataFr={servicesBoxFr} ServicesData={servicesBox} />
      <CloudPlatform
        skillDatafr={skillsdatafr}
        skillData={skillsdata}
        mainImage={skillContent}
        skillIcons={skilllogo}
        skillBars={Skills}
        SkillsBarsFr={SkillsFr}
      />
      <InterestedSection
        pageContentfr={workContentFr}
        pageContent={workContent}
        image={InterviewAmico}
      />
      {/* <SkillsSection
        skillBars={Skills}
        skillIcons={skilllogo}
        skillData={skillsdata}
        mainImage={skillContent}
      /> */}
      <TestimonialPage dataFr={TestimonialDataFr} data={TestimonialData} />
      <ContactUs datafr={CallToActionDataFr} data={CallToActionData} />
      <BlogSectionHome BlogDataFr={BlogDataFr} BlogData={BlogData} />
    </>
  );
};
export default Home;
