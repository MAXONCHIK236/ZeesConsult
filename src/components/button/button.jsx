import React from 'react'
import styles from "./button.module.scss"
const Button = ({text}) => {
  return (
    <div className={styles.strange__btn}>
      <button className={styles.button} ><a>Подробнее</a></button>
      </div>
  )
}
export default Button
