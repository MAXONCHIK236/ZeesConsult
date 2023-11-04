import React from "react";
import styles from "./ChemeEmployer.module.scss";
import img from "../assents/warning.svg";
import { useTranslation } from "react-i18next";
const ChemeEmployer = ({ title }) => {
  const {t} = useTranslation();
  return (
    <div className={styles.ChemeEmployer}>
      <div className={styles.cheme__img}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.block}>
        <p>{t(title)}</p>
      </div>
    </div>
  );
};

export default ChemeEmployer;
