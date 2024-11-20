import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Main } from "@/components/craft";
import { cn } from "@/lib/utils";
import MainHeader from "@/components/Header";
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WordPress & Next.js Starter by 9d8",
  description:
    "A starter template for Next.js with WordPress as a headless CMS.",
  metadataBase: new URL("https://wp.9d8.dev"),
};

// Revalidate content every hour
export const revalidate = 3600;

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head />
//       <body
//         className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
//       >
// <ThemeProvider
//   attribute="class"
//   defaultTheme="system"
//   enableSystem
//   disableTransitionOnChange
// >
//   <MainHeader />
//   <Main>{children}</Main>
//   <Footer />
// </ThemeProvider>
// <Analytics />
//       </body>
//     </html>
//   );
// }

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MainHeader />
            <Main>{children}</Main>
            <Footer />
          </ThemeProvider>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
