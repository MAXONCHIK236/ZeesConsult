import React from 'react'
import styles from "./Ram.module.scss"
const Ram = ({text}) => {
  return (
    <div className={styles.Ram}>
      <div className={styles.ram2}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Ram
