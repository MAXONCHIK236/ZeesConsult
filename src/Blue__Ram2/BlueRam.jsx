import React from "react";
import styles from "./BlueRam.module.scss";
import { useTranslation } from "react-i18next";
const BlueRam = ({ text, title }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.Ram}>
        <h1>{t(title)}</h1>
        <p>{t(text)}</p>
      </div>
    </>
  );
};

export default BlueRam;
