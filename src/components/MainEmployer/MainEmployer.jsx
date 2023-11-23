import React from "react";
import styles from "./MainEmployer.module.scss";
import logo from "../../assents/header_img/logo2.svg";
import { useTranslation } from "react-i18next";
const MainEmployer = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.Employer}>
        <div className="container">
            <div className={styles.employer__img}>
      <img src={logo} alt="logo" />
      <h1>
       {t("employer.security")} <b>- ZESS Consulting</b> {t("employer.security2")}
      </h1>
      </div>
    </div>
    </div>
  );
};

export default MainEmployer;
