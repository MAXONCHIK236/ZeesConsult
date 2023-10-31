import React from "react";
import styles from "./ChemeEmployer.module.scss";
import img from "../assents/warning.svg";
const ChemeEmployer = ({ title }) => {
  return (
    <div className={styles.ChemeEmployer}>
      <div className={styles.cheme__img}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.block}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ChemeEmployer;
