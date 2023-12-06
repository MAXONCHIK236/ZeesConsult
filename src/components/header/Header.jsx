import {React,useState} from "react";
import styles from "./Header.module.scss";
import logo from "../../assents/header_img/logo.svg";
import headerArrow from "../../assents/header_img/headerArrow.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "../../i18n.js";
import { useTranslation } from "react-i18next";
import TranslationDropdown from "../TranslationDrop/TranslationDropdown";
function Header() {
  const { t } = useTranslation();
  const [,setBurgerMenuOpen] = useState(false);
  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  }
  const handleLanguageChange = () => {
    closeBurgerMenu();
  };

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
                {t("header.services")} <img src={headerArrow} alt="arrow" />
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
            <TranslationDropdown onChange={handleLanguageChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
