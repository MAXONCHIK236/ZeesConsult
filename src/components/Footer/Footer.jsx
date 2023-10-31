import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assents/header_img/logo.svg";
import headerArrow from "../../assents/header_img/headerArrow.svg";
const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__column}>
        <div className={styles.icon}>
        <a href="/"> <img src={logo} alt="" /></a> 
        </div>
        <div className={styles.center}>
        <div className={styles.center__info}>
          <div className={styles.text__link}>
            <a href="">Главная</a>
            <a href=""> О нас </a>
            <div className={styles.dropdown}> 
                <button className={styles.dropbtn}>Услуги <img src={headerArrow} alt="arrow" /> </button> 
                <div className={styles.contentdown}> 
                  <a href="/ServicePersonal">Для персонала</a> 
                  <a href="/ServiceEmployer">Для работодателей </a> 
                  
                </div> 
              </div>
            <a href="">Контакты</a>
          </div>
          <div className={styles.impersssum}>
            <a>Impressum</a>
            <a>Datenschutz</a>
          </div>
        </div>
        <div className={styles.Footer__rules}>
          <p>ZESS Consulring права защищены 2023</p>
          <p>Политика конфинденциальности</p>
          <p>Отправить форму</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
