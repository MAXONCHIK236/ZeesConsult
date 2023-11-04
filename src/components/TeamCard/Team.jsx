import React from 'react'
import styles from "./Team.module.scss"
import { useTranslation } from 'react-i18next'
const Team = ({img, Name,WhoIsIt}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.team__card}>
        <img src={img} alt="icon" />
        <h1> {t(Name)}</h1>
        <p>{t(WhoIsIt)}</p>
    </div>
  )
}

export default Team
