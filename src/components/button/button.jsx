import React from 'react'
import styles from "./button.module.scss"
const Button = ({text ,link}) => {
  return (
    <div className={styles.strange__btn}>
      <button className={styles.button} ><a href={link}>Подробнее</a></button>
      </div>
  )
}
export default Button
