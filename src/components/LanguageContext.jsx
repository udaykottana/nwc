// LanguageContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
  const [translationData, setTranslationData] = useState(null);

  // Check if language is stored in local storage, if not set default as English
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (!storedLanguage) {
      localStorage.setItem("selectedLanguage", "en");
    }
  }, []);

  const updateTranslationData = (data) => {
    setTranslationData(data);
  };

  return (
    <LanguageContext.Provider value={{ translationData, updateTranslationData }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);