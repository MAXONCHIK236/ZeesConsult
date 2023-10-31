import React from 'react'
import styles from "./AboutUs.module.scss"
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
import AboutMain from '../../components/AboutUsMain/AboutMain'
import OurTeam from '../../components/OurTeam/OurTeam'
import Questions from '../../components/Questions/Questions'
import Form from '../../components/Form/Form'

const AboutUs = () => {
  return (
    <div className={styles.AboutUs}>
      <Header/>
       <AboutMain/>
       <OurTeam/>
       <Questions/>
       <Form/>
      <Footer/>
    </div>
  )
}

export default AboutUs
