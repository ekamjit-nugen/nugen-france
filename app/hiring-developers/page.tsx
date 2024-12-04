import React from "react";
import InterestedSection from "@/components/Home/Hire";
// import ScreenAnimation from "../../components/ui/ThreeDMenu";
import InterviewAmico from "../../components/icons/png/Interview-amico.svg"
const ServiceSectionPage = async () => {
    // const pageCont = await getPageBySlug("work-with-us")
    // const images = await imageLink(pageCont?.acf?.image)
    const pageCont = { header_title: "Welcome to Hiring Developer", header_description: "At Hiring Developer, we connect businesses with skilled developers to bring your projects to life. Whether you're seeking full-time professionals, part-time contributors, or freelance talent, we offer a streamlined process to match your needs. Explore a pool of experienced developers ready to deliver exceptional results and take your ideas from concept to reality. Let’s build something amazing together!" }
    const pageContent = { ...pageCont, image: InterviewAmico }
    return (
        <>
            {/* <ScreenAnimation /> */}
            <InterestedSection pageContent={pageContent} image={InterviewAmico} />
        </>
    );
};
export default ServiceSectionPage;