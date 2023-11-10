import React from 'react'
import styles from "./Service.module.scss"
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
import PersonalMain from '../../components/PersonalMain/PersonalMain'
import Consulting from '../../components/Consulting/Consulting'
import PictureMain from '../../components/PictureMain/PictureMain'
import Form from "../../components/Form/Form";
const Service = () => {
  return (
    <div className={styles.ServicePersonal}>
      <Header/>
      <PictureMain/>
      <PersonalMain/>
      <Consulting/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Service
