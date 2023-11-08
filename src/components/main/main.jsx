import React from "react";
import styles from "./main.module.scss";
import image from "../../assents/main_img/main2.jpg";
import { useTranslation } from "react-i18next";
import rightArrow from "../../assents/cursor_decoration/right.svg"
import "../../i18n.js";
const Main = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.flex__content}>
          <div className={styles.main__img}>
            <img src={image} alt="img__main" />
          </div>
          <div className={styles.under__text}>
            <p>
              <b>ZESS Consulting</b> {t("main.partner")} <br />
              {t("main.partner2")} <br /> {t("main.partner3")}
              <br /> {t("main.partner4")}
              <br /> {t("main.partner5")}
            </p>
            <div className={styles.button}>
              <img src={rightArrow} alt="right" />
              <button>
                 <a href="AboutUs">Подробнее</a> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
