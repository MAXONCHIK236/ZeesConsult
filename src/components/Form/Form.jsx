import React from 'react'
import styles from "./Form.module.scss"
import imgForm from "../../assents/form/img.svg"
import { useTranslation } from 'react-i18next'
const Form = () => {
  const {t} = useTranslation();
  return (
    <div className={styles.Form}>
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }} className="container2">
        <div className={styles.Card}>
            <img src={imgForm} alt="img" />
            <div className={styles.questions}>
            <a>{t("Form.text")}</a>
            <a>{t("Form.text2")}</a>
            <a>{t("Form.text3")}</a>
            <a>{t("Form.text6")}</a>
            <a>{t("Form.text4")}</a>
            </div>
            <button><a href='/Contact' >{t("Form.text5")}</a></button>
            </div>
        </div>
      
    </div>
  )
}

export default Form
