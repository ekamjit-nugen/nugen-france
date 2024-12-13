import React from "react";
import PortfolioPage from "@/components/portfolio";
import FaqPage from "@/components/Faq";
import { PagesData } from "@/lib/common-api/common";

const Portfolio = async () => {
  const achievementdata = await PagesData("project-section");
  const achievementdataFr = await PagesData("project-section-fr");
  
  //faq 
  const faqdata = await PagesData("faq-section");
  const data = faqdata.length
  const faqdataFr = await PagesData("faq-section-fr");
  const datafr = faqdataFr.length

  return (
    <>
      <PortfolioPage data={achievementdata} datafr={achievementdataFr}/>
      <FaqPage faqdata={faqdata} faqdataFr={faqdataFr} title={faqdata[data-1]} titlefr={faqdataFr[datafr-1]}  />
    </>
  );
}
export default Portfolio;

