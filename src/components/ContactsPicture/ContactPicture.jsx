import React from 'react'
import styles from './Contact.module.scss'
import logo from "../../assents/header_img/logo2.svg"
import bg from "../../assents/contacts__img/bg.svg"
const ContactPicture = () => {
  return (
    <div className={styles.Contact}>
        <div className="container">
        <div className={styles.contact__img}>
        <div className={styles.main__img}>
            <img src={bg} alt="img__main" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default ContactPicture
