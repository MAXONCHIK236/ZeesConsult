import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assents/header_img/logo.svg";
import headerArrow from "../../assents/header_img/headerArrow.svg";
import Burgermenu from "../../assents/header_img/headerBurgerMenu.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
const Header = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(true);
    const toggleMenu = () => {
      setIsMobileMenuVisible(!isMobileMenuVisible);
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
            <a href="/">Главная</a>
            <a href="/AboutUs"> О нас </a>
            <div className={styles.dropdown}>
              <button className={styles.dropbtn}>
                Услуги <img src={headerArrow} alt="arrow" />{" "}
              </button>
              <div className={styles.contentdown}>
                <a href="/ServicePersonal">Для персонала</a>
                <a href="/ServiceEmployer">Для работодателей </a>
              </div>
            </div>
            <a href="/Contact">Контакты</a>
          </div>

          <div className={styles.menu}>
          <BurgerMenu/>
          </div>
          <select>
            <option value="option1"><img src="" alt="" /> <a>Русский</a></option>
            <option value="option2"><img src="" alt="" /> <a>Ger</a> </option>
            <option value="option3"><img src="" alt="" /> <a>Eng</a></option> 
  
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
