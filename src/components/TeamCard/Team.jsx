import React from 'react'
import styles from "./Team.module.scss"
const Team = ({img, Name,WhoIsIt}) => {
  return (
    <div className={styles.team__card}>
        <img src={img} alt="icon" />
        <h1> {Name}</h1>
        <p>{WhoIsIt}</p>
    </div>
  )
}

export default Team
