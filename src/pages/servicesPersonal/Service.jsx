import React from 'react'
import styles from "./Service.module.scss"
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
import PersonalMain from '../../components/PersonalMain/PersonalMain'
import Consulting from '../../components/Consulting/Consulting'
import PictureMain from '../../components/PictureMain/PictureMain'
const Service = () => {
  return (
    <div className={styles.ServicePersonal}>
      <Header/>
      <PictureMain/>
      <PersonalMain/>
      <Consulting/>
      <Footer/>
    </div>
  )
}

export default Service
