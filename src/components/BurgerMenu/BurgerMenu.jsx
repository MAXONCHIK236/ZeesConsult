import React, { useState } from "react";
import styles from "./BurgerMenu.module.scss";
import Burger from "../../assents/header_img/headerBurgerMenu.svg";
import TranslationDropdown from "../TranslationDrop/TranslationDropdown";
import { useTranslation } from "react-i18next";
const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.burger_menu}>
      <div
        className={`${styles.menu_button} ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <img src={Burger} alt="burger" />
      </div>
      {menuOpen && (
        <div className={styles.menu_items}>
          <ul>
            <TranslationDropdown />
            <li>
              <a href="/">{t("header.home")}</a>
            </li>
            <li>
              <a href="/AboutUs"> {t("header.about")} </a>
            </li>
            <li>
              <a href="/ServicePersonal">{t("header.forpersonal")}</a>
            </li>
            <li>
              <a href="/ServiceEmployer">{t("header.foremployer")} </a>
            </li>
            <li>
              <a href="/Contact">{t("header.contact")}</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
