import React, { useState } from "react";
import styles from "./BurgerMenu.module.scss";
import Burger from "../../assents/header_img/headerBurgerMenu.svg";
import TranslationDropdown from "../TranslationDrop/TranslationDropdown";
import { useTranslation } from "react-i18next";

const BurgerMenu = ({ isOpen, onClose }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
    if (onClose) {
      onClose();
    }
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
            <li>
              <TranslationDropdown onChange={handleMenuItemClick} />
            </li>
            <li>
              <a href="/" onClick={handleMenuItemClick}>
                {t("header.home")}
              </a>
            </li>
            <li>
              <a href="/AboutUs" onClick={handleMenuItemClick}>
                {t("header.about")}
              </a>
            </li>
            <li>
              <a href="/ServicePersonal" onClick={handleMenuItemClick}>
                {t("header.forpersonal")}
              </a>
            </li>
            <li>
              <a href="/ServiceEmployer" onClick={handleMenuItemClick}>
                {t("header.foremployer")}
              </a>
            </li>
            <li>
              <a href="/Contact" onClick={handleMenuItemClick}>
                {t("header.contact")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
