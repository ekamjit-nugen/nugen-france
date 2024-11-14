"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FaqPage = () => {
  const [activeTab, setActiveTab] = useState<Number>(0);

  const handleClick = (tab: Number) => {
    setActiveTab(activeTab === tab ? 0 : tab);
  };
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
        "Changes to an existing order can be made as long as the order is still in “processing” status. Please contact our team via email and we’ll make sure to apply the needed changes. If your order has already been shipped, we cannot apply any changes to it. If you are unhappy with your order when it arrives, please contact us for any changes you may require.",
    },
    {
      question: "What shipping options do you have?",
      answer: "For USA domestic orders we offer FedEx and USPS shipping.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept MasterCard, Visa, American Express, PayPal, JCB Discover, Gift Cards, etc.",
    },
  ];

  return (
    <div className="h-screen bg-blue-50">
      <main className="p-5 bg-light-blue">
        <div className="flex justify-center items-start my-2">
          <div className="w-full sm:w-10/12 md:w-1/2 my-1">
            <h2 className="text-xl font-semibold text-vnet-blue mb-2">
              FAQ - Order, Shipping, Etc.
            </h2>
            <ul className="flex flex-col">
              {faqItems.map((item, index) => (
                <li key={index} className="bg-white my-2 shadow-lg">
                  <h2
                    onClick={() => handleClick(index + 1)}
                    className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`text-purple-700 h-6 w-6 transform transition-transform duration-500 ${
                        activeTab === index + 1 ? "rotate-180" : ""
                      }`}
                    />
                  </h2>
                  <div
                    style={{
                      maxHeight: activeTab === index + 1 ? "100%" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.5s ease",
                    }}
                    className="border-l-2 border-purple-600"
                  >
                    <p className="p-3 text-gray-900">{item.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
export default FaqPage;
