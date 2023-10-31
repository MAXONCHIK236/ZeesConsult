import React from 'react'
import styles from "./Sheme.module.scss"

const ShemeCard = ({img, title, text}) => {
  return (
    <div className={styles.ShemeCard} >
       <img src={img} alt="icon__number" />
       <div className={styles.Scheme__text}>
    <p><b>{title}</b>{text}</p>
       </div>
    </div>
  )
}

export default ShemeCard
