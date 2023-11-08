import React from "react";
import styles from "./PictureMain.module.scss";
import { useTranslation } from "react-i18next";
const PictureMain = () => {
    const {t} = useTranslation();
  return (
    <div className={styles.PictureMain}>
      <div className="container2">
        <div className={styles.Picture__img}>
          <h1>
           <b>ZEES</b> CONSULTING
          </h1>
          <p>{t("header.best")}<br/>
          {t("header.search")}<br/>
          {t("header.employer")}</p>
        </div>
      </div>
    </div>
  );
};

export default PictureMain;
