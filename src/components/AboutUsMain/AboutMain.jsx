import React from "react";
import styles from "./About.module.scss";
import logo from "../../assents/header_img/logo2.svg"
const AboutMain = () => {
  return (
    <div className={styles.About}>
        <div className="container2">
          <div className={styles.About__img}>
        <p>
          Мы предлагаем уникальную возможность студентам из Средней Азии
          отправиться на работу в Германию.
        </p>
        <img src={logo} alt="logo" />
 </div>
 </div>
 </div>
  );
};

export default AboutMain;
