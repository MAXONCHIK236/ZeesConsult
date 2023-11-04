import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assents/header_img/logo.svg";
import headerArrow from "../../assents/header_img/headerArrow.svg";
import Burgermenu from "../../assents/header_img/headerBurgerMenu.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "../../i18n.js";
import { useTranslation } from "react-i18next";
import TranslationDropdown from "../TranslationDrop/TranslationDropdown";
function Header() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(true);
  const toggleMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  let handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [lng, setLng] = useState(false);
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_center__content}>
          <div className={styles.logo}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className={styles.content}>
            <a href="/">{t("header.home")}</a>
            <a href="/AboutUs">{t("header.about")} </a>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>
                {t("header.services")} <img src={headerArrow} alt="arrow" />{" "}
              </button>
              <div className={styles.contentdown}>
                <a href="/ServicePersonal">{t("header.forpersonal")}</a>
                <a href="/ServiceEmployer">{t("header.foremployer")} </a>
              </div>
            </div>
            <a href="/Contact">{t("header.contact")}</a>
          </div>

          <div className={styles.menu}>
            <BurgerMenu />
         
          </div>
          <div className={styles.translation}>
            <TranslationDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
