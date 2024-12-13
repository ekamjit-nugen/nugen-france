"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqPageProps {
  header_title: string;
  header_description: string;
  animated_title: string;
  button_value: string;
  button_title: string;
  post_title: string;
  post_image: string;
  post_description: string;
  post_icon: string;
  project_category: string;
  button: string;
  url_value: string;
}
interface FAQItemData {
  faqdata: FaqPageProps[];
  faqdataFr: FaqPageProps[];
  title: FaqPageProps;
  titlefr: FaqPageProps;
}

const FaqPage: React.FC<FAQItemData> = ({ faqdata, faqdataFr, title ,titlefr}) => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };
  const [language, setLanguage] = useState("en");
  const langData = async () => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  };
  useEffect(() => {
    langData();
  }, [langData]);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <main className="p-5 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 ">
      <div className="text-2xl font-semibold text-blue-800 mb-6 text-center">
      {language === "fr"
              ? titlefr?.header_title
              : title?.header_title}
        </div>
        <ul className="space-y-4">
          {(language === "fr" ? faqdataFr : faqdata)?.map((item, index) => (
            <li key={index} className="bg-gray-100 rounded-lg shadow-md">
              <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg"
              >
                <span>{item?.post_title}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeTab === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`transition-max-height duration-300 overflow-hidden ${
                  activeTab === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="p-4 text-gray-700">{item?.post_description}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default FaqPage;
