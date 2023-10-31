import React from "react";
import styles from "./BlueRam.module.scss";
const BlueRam = ({ text, title }) => {
  return (
    <>
    
    <div className={styles.Ram}>
        <h1>{title}</h1>
      <p>{text}</p>
    </div>
    </>
  );
};

export default BlueRam;
