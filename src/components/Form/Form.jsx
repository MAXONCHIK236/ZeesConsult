import React from 'react'
import styles from "./Form.module.scss"
import imgForm from "../../assents/form/img.svg"
const Form = () => {
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
            <a>Вы ищите работу за рубежом?</a>
            <a>Вас заинтересовали услуги?</a>
            <a>Вы работодатель?</a>
            <a>Вы Студент?</a>
            </div>
            <button><a href='/Contacts' >Заполнить форму</a></button>
            </div>
        </div>
      
    </div>
  )
}

export default Form
