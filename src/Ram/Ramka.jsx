import React from "react";
import styles from "./Ramka.module.scss";
import { useTranslation } from "react-i18next";
const Ramka = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.Ramka}>
      <p>
       {t("About.if")}
      </p>
    </div>
  );
};
export default Ramka;
