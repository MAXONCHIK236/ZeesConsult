import React from 'react'
import styles from "./button.module.scss"
import { useTranslation } from 'react-i18next'
const Button = ({text ,link}) => {
  const {t} = useTranslation()
  return (
      <button className={styles.button} ><a href={link}>{t("header.next")}</a></button>
  )
}
export default Button
 