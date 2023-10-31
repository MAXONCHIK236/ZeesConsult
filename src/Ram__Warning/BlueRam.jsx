import React from "react";
import styles from "./BlueRam.module.scss";
import warning from "../assents/warning.svg"
const BlueRam = ({ text, title }) => {
  return (
    <>
    <div className={styles.warning}>
      <img src={warning} alt="warning" />
    </div>
    <div className={styles.Ram}>
        <h1>{title}</h1>
      <p>{text}</p>
    </div>
    </>
  );
};

export default BlueRam;
