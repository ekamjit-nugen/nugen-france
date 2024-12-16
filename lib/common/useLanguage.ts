import { useState, useEffect } from "react";

export const useLanguage = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    window.scrollTo(0, 0); // Scroll to top when the language changes
  };

  return { language, toggleLanguage };
};
