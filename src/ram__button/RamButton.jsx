import React from 'react'
import styles from "./RamButton.module.scss"
import { useTranslation } from 'react-i18next'
const RamButton = () => {
   const {t} = useTranslation();
  return (
    <div className={styles.RamButton}>
      <div className={styles.text}>
       <a href='/Contact'>{t("About.interes")}</a>
      </div>
      <button>{t("Form.text5")}</button>
    </div>
  )
}

export default RamButton
