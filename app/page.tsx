import React from "react";
import HomePage from "@/components/Home";
import About from "@/components/Home/About";
import ServicesPage from "@/components/Home/services";
import CallToAction from "@/components/Home/contactme";
import SkillsSection from "@/components/Home/skillsSection";
import BlogSectionHome from "@/components/Home/blog";
import TestimonialPage from "@/components/Home/Testimonial";
import Achievements from "@/components/Home/Achievements";

export default function Home() {
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
}
