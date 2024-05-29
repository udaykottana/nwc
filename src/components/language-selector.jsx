import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useLanguage } from "./LanguageContext";

const languages = [
  { code: "ja", lang: "日本語" },
  { code: "en", lang: "English" },
];

const LanguageSelector = () => {
  const { translationData, updateTranslationData } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("selectedLanguage") || "en");

  useEffect(() => {
    const receiveTranslationFromBackend = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/frontend-language", {
          language: selectedLanguage,
        });

        const translationData = response.data;
        updateTranslationData(translationData);
        console.log("Translation data received from the backend:", translationData);
      } catch (error) {
        console.error("Error receiving translation data from the backend:", error);
      }
    };

    
     receiveTranslationFromBackend();
  }, [selectedLanguage]);

  const changeLanguage = (lng) => {
    setSelectedLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
  };

  return (
    <div className="btn-container">
      {languages.map((lng) => (
        <Button
          key={lng.code}
          sx={{ color: "black" }}
          className={lng.code === selectedLanguage ? "selected" : ""}
          onClick={() => changeLanguage(lng.code)}
        >
          {lng.lang}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSelector;
