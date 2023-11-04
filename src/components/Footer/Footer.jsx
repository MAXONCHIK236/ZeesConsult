import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assents/header_img/logo.svg";
import headerArrow from "../../assents/header_img/headerArrow.svg";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__column}>
        <div className={styles.icon}>
        <a href="/"> <img src={logo} alt="" /></a> 
        </div>
        <div className={styles.center}>
        <div className={styles.center__info}>
          <div className={styles.text__link}>
            <a href="/">{t("header.home")}</a>
            <a href="/AboutUs"> {t("header.about")} </a>
            <div className={styles.dropdown}> 
                <button className={styles.dropbtn}>{t("header.services")} <img src={headerArrow} alt="arrow" /> </button> 
                <div className={styles.contentdown}> 
                  <a href="/ServicePersonal">{t("header.forpersonal")}</a> 
                  <a href="/ServiceEmployer">{t("header.foremployer")} </a>  
                </div> 
              </div>
            <a href="/Contact">{t("header.contact")}</a>
          </div>
          <div className={styles.impersssum}>
            <a>Impressum</a>
            <a>Datenschutz</a>
          </div>
        </div>
        <div className={styles.Footer__rules}>
          <p>{t("header.rules")}</p>
          <p>{t("header.rules2")}</p>
          <a href="/Contact">{t("header.send")}</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
