import React from 'react'
import styles from "./Ram.module.scss"
const Ram3 = ({text,title,title1,title2,title3}) => {
  return (
    <div className={styles.Ram}>
      <div className={styles.ram2}>
        <p>{text}</p>
        <p>{title}</p>
        <p>{title1}</p>
        <p>{title2}</p>
        <p>{title3}</p>
      </div>
    </div>
  )
}

export default Ram3
