import React, { useState } from "react";
import i18n from "i18next"; 
import styles from "./TranslationDropDown.module.scss";
import RussiaFlag from "../../assents/header_img/FlagRussia.svg";
const TranslationDropdown = ({onChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    if (onChange) {
      onChange();
    }
  };
  const languageOptions = [
    { value: "en", label: "English", icon: RussiaFlag },
    { value: "ru", label: "Русский", icon: RussiaFlag },
    { value: "ger", label: "Deutsch", icon: RussiaFlag },
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
