import React from "react";
import styles from "./Devider.module.scss";
import watermark from "../assents/watermark/watermark.svg"
const Devider = ({ text }) => {
  return (
    <div className={styles.watermark}>
         <h1> {text}</h1>
    </div>
  );
};

export default Devider;
