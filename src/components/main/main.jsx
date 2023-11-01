import React from "react";
import styles from "./main.module.scss";
import image from "../../assents/main_img/main2.svg";
import Button from "../button/button";
const Main = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.flex__content}>
          <div className={styles.main__img}>
            <img src={image} alt="img__main" />
          </div>
          <div className={styles.under__text}>
            <p>
              <b>ZESS Consulting</b> – Ваш надежный партнер в поиске <br />
              работы в Германии и ЕС и подборе <br /> персонала.
              Профессиональный подход и широкий <br /> выбор вакансий у
              различных работодателей
              <br /> на территории ЕС, квалифицированно и надежно
            </p>
            <div className={styles.button}>
          <Button link="/AboutUs" />
        </div>
          </div>
  
        </div>
      
      </div>
    </div>
  );
};

export default Main;
