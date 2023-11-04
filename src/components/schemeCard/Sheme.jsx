import React from 'react'
import styles from "./Sheme.module.scss"
import { useTranslation } from 'react-i18next'
const ShemeCard = ({img, title, text}) => {
  const {t} = useTranslation();
  return (
    <div className={styles.ShemeCard} >
       <img src={img} alt="icon__number" />
       <div className={styles.Scheme__text}>
    <p><b>{t(title)}</b>{t(text)}</p>
       </div>
    </div>
  )
}

export default ShemeCard
