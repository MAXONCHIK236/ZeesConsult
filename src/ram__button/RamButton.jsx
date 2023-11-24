import React from 'react'
import styles from "./RamButton.module.scss"
import { useTranslation } from 'react-i18next'
import right from "../assents/cursor_decoration/right.svg"
const RamButton = () => {
   const {t} = useTranslation();
  return (
    <div className={styles.RamButton}>
      <div className={styles.text}>
       <a >{t("About.interes")}</a>
      </div>
    <div className={styles.ramtext}>
      <img src={right} alt="right" /></div>  
      <button><a href='/Contact'>{t("Form.text5")}</a></button>
    </div>
  )
}

export default RamButton
