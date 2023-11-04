import React, { useState } from "react";
import styles from   "./BurgerMenu.module.scss"
import Burger from "../../assents/header_img/headerBurgerMenu.svg"
import TranslationDropdown from "../TranslationDrop/TranslationDropdown";
const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.burger_menu}>
      <div className={`${styles.menu_button} ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
       <img src={Burger} alt="burger" />
      </div>
      {menuOpen && (
        <div className={styles.menu_items}>
          <ul>
          <TranslationDropdown/>
            <li> <a href="/">Главная</a></li>
            <li> <a href="/AboutUs"> О нас </a></li>
            <li> <a href="/ServicePersonal">Для персонала</a></li>
            <li>  <a href="/ServiceEmployer">Для работодателей </a></li>
            <li> <a href="/Contact">Контакты</a></li>
          
          </ul>
        </div>
           
           
       
           
      )}
    </div>
  );
};

export default BurgerMenu;
