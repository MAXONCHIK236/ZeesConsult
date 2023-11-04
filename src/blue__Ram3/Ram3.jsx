import React from 'react'
import styles from "./Ram.module.scss"
import { useTranslation } from 'react-i18next'

const Ram3 = ({text,title,title1,title2,title3}) => {
  const {t} = useTranslation();
  return (
    <div className={styles.Ram}>
      <div className={styles.ram2}>
        <p>{t(text)}</p>
        <p>{t(title)}</p>
        <p>{t(title1)}</p>
        <p>{t(title2)}</p>
        <p>{t(title3)}</p>
      </div>
    </div>
  )
}

export default Ram3
