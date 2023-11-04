import React from "react";
import styles from "./About.module.scss";
import logo from "../../assents/header_img/logo2.svg"
import { useTranslation } from "react-i18next";
const AboutMain = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.About}>
        <div className="container2">
          <div className={styles.About__img}>
        <p>
         {t("About.text")}
        </p>
        <img src={logo} alt="logo" />
 </div>
 </div>
 </div>
  );
};

export default AboutMain;
