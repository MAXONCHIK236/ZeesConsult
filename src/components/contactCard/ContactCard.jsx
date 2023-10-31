import React from 'react'
import styles from "./Contact.module.scss"
const ContactCard = ({img,paragraph,adress,email}) => {
  return (
    <div className={styles.Card}>
        <div className={styles.center__card}>
      <img src={img} alt="icon" />
      <div className={styles.text__card}>
      <p>{paragraph}</p>
      <p>{adress}</p>
      </div>
      </div>
   
  
    </div>
  )
}

export default ContactCard
