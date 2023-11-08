import React from 'react'
import styles from "./RamButton.module.scss"
import { useTranslation } from 'react-i18next'
import right from "../assents/cursor_decoration/right.svg"
const RamButton = () => {
   const {t} = useTranslation();
  return (
    <div className={styles.RamButton}>
      <div className={styles.text}>
       <a href='/Contact'>{t("About.interes")}</a>
      </div>
    <div><img src={right} alt="right" /></div>  
      <button>{t("Form.text5")}</button>
    </div>
  )
}

export default RamButton
