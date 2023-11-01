import React from 'react'
import styles from "./RamButton.module.scss"
const RamButton = () => {
  return (
    <div className={styles.RamButton}>
      <div className={styles.text}>
       <a href='/Contact'>Если у вас появился интерес к этой программе заполните контакную форму</a>
      </div>
      <button>Заполнить форму</button>
    </div>
  )
}

export default RamButton
