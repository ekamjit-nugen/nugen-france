"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PagesData } from "@/lib/common-api/common";

const dataCall = async () => {
  const datafaq = await PagesData("faq-section");
  console.log(datafaq);
}
const faqItems = [
  {
    question: "When will my order arrive?",
    answer:
      "Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.",
  },
  {
    question: "What’s your return policy?",
    answer:
      "We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label.",
  },
  {
    question: "How do I make changes to an existing order?",
    answer:
      "Changes to an existing order can be made as long as the order is still in 'processing' status. Please contact our team via email and we’ll make sure to apply the needed changes. If your order has already been shipped, we cannot apply any changes to it.",
  },
  {
    question: "What shipping options do you have?",
    answer: "For USA domestic orders, we offer FedEx and USPS shipping.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept MasterCard, Visa, American Express, PayPal, JCB Discover, Gift Cards, etc.",
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

const FaqPage = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <main className="p-5 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 ">
        <div className="text-2xl font-semibold text-blue-800 mb-6 text-center">
          FAQ - Order, Shipping, Etc.
        </div>
        <ul className="space-y-4">
          {faqItems.map((item: FAQItem, index: number) => (
            <li key={index} className="bg-gray-100 rounded-lg shadow-md">
              <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg"
              >
                <span>{item.question}</span>
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
                <p className="p-4 text-gray-700">{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default FaqPage;
