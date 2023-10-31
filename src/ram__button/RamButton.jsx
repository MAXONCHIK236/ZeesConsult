import React from 'react'
import styles from "./RamButton.module.scss"
const RamButton = () => {
  return (
    <div className={styles.RamButton}>
      <div className={styles.text}>
       <p>Если у вас появился интерес к этой программе заполните контакную форму</p>
      </div>
      <button>Заполнить форму</button>
    </div>
  )
}

export default RamButton
