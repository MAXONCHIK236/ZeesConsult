import React, { useMemo } from "react";
import styles from "./Footer.module.scss";
import logo from "../../assents/header_img/logo.svg";
import headerArrow from "../../assents/header_img/headerArrow.svg";
import { useTranslation } from "react-i18next";
import impersssum from "../../politics/Impressum.pdf"
import Datenschuts from "../../politics/Datenschutz.pdf"
import { Socials } from "../../constants/Team";
const Footer = () => {
  const {t} = useTranslation()
  const renderSoc = useMemo(
    () => Socials.map((item) => <div className={styles.socials}><a href={item.link} ><img src={item.img} alt="icon" /></a></div>),
    []
  );
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
          <div className={styles.social}>{renderSoc}</div>
          <div className={styles.impersssum}>
            <a href={impersssum}>Impressum</a>
            <a href={Datenschuts}>Datenschutz</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
