import React from 'react'
import styles from './Contact.module.scss'
import logo from "../../assents/header_img/logo2.svg"
const ContactPicture = () => {
  return (
    <div className={styles.Contact}>
        <div className="container">
        <div className={styles.contact__img}>
            <img src={logo} alt="contact" />
        </div>
        </div>
    </div>
  )
}

export default ContactPicture
