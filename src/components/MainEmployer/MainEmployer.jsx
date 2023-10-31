import React from "react";
import styles from "./MainEmployer.module.scss";
import logo from "../../assents/header_img/logo2.svg";
const MainEmployer = () => {
  return (
    <div className={styles.Employer}>
        <div className="container">
            <div className={styles.employer__img}>
      <img src={logo} alt="logo" />
      <h1>
        “Безопасность, инновации, качество  <b>-ZESS Consulting</b> , ваш ключ к
        профессиональному персоналу.”
      </h1>
      </div>
    </div>
    </div>
  );
};

export default MainEmployer;
