import React, { useState } from "react";
import i18n from "i18next"; // You should import your translation library
import styles from "./TranslationDropDown.module.scss";
import { screen } from "@testing-library/react";
import RussiaFlag from "../../assents/header_img/FlagRussia.svg";
const TranslationDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const languageOptions = [
    { value: "en", label: "English", icon: RussiaFlag },
    { value: "ru", label: "Русский", icon: RussiaFlag },
    { value: "ger", label: "Germany", icon: RussiaFlag },
  ];

  return (
    <div className={styles.changeLang}>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TranslationDropdown;
