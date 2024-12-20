import React from "react";
import ContactPage from "@/components/contactUs";
import ScreenAnimation from "../../components/ui/ThreeDMenu";
import { getPageBySlug } from "@/lib/wordpress";
import { PagesData } from "@/lib/common-api/common";

const ContactUs = async () => {
  const PageContent = await getPageBySlug("contact-us");
  const contactusButton = await PagesData("contact-us-buttons");
  const contactusButtonFr = await PagesData("contact-us-buttons-fr");
  const PageContentfr = await getPageBySlug("contact-us-fr");
  return (
    <>
      {/* <ScreenAnimation /> */}
      <ContactPage props={PageContent?.acf} propsfr={PageContentfr?.acf} buttons={contactusButton} buttonsfr={contactusButtonFr} />
    </>
  );
};

export default ContactUs;
