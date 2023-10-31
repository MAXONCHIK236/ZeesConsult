import React from 'react'
import styles from "./Datenschuts.module.scss"
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
const Datenschuts = () => {
    
  return (
    <div className={styles.Datenschuts}>
      <Header/>
      <div className={styles.Datenschuts__text}>
        <p></p>
      </div>

      <Footer/>
    </div>
  )
}

export default Datenschuts
