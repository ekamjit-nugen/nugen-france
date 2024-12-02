import React from "react";
import PortfolioPage from "@/components/portfolio";
import FaqPage from "@/components/Faq";
import { PagesData } from "@/lib/common-api/common";

const Portfolio = async () => {
  const achievementdata = await PagesData("project-section");

  return (
    <>
      <PortfolioPage data={achievementdata}/>
      <FaqPage/>
    </>
  );
}
export default Portfolio;

