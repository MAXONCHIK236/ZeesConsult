import React from "react";
import styles from "./Ram.module.scss";
import { useTranslation } from "react-i18next";
const Ram = ({ text }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.Ram}>
      <div className={styles.ram2}>
        <p>{t(text)}</p>
      </div>
    </div>
  );
};

export default Ram;
