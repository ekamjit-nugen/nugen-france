// import React from "react";
// import HomePage from "@/components/Home";
// import About from "@/components/Home/About";
// import ServicesPage from "@/components/Home/services";
// import CallToAction from "@/components/Home/contactme";
// import SkillsSection from "@/components/Home/skillsSection";
// import BlogSectionHome from "@/components/Home/blog";
// import TestimonialPage from "@/components/Home/Testimonial";
// import Achievements from "@/components/Home/Achievements";
// import { imageLink, PagesData } from "@/lib/common-api/common";
// import { getPageBySlug } from "@/lib/wordpress";
// import MainHeader from "@/components/Header";
// import Footer from "@/components/footer";
// import { NextIntlClientProvider } from "next-intl";
// import { ThemeProvider } from "next-themes";
// import { Main } from "@/components/craft";
// import { Analytics } from "@vercel/analytics/react";
// import { getLocale } from "next-intl/server";


// export default async function NarbarData({
//     children
//   }: {
//     children: React.ReactNode;
//   }) {
//     const locale = await getLocale();
  
//     // Providing all messages to the client
//     // side is the easiest way to get started
//     const messages = await getMessages();
//       const navBar = await PagesData("nav-bar");
//     console.log(navBar, "navBar");
    
//   return (
//     <>
//  <NextIntlClientProvider messages={messages}>
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange
//           >
//             <MainHeader />
//             <Main>{children}</Main>
//             <Footer />
//           </ThemeProvider>
//           <Analytics />
//         </NextIntlClientProvider>
     
//     </>
//   );
// };
// export default NarbarData;
