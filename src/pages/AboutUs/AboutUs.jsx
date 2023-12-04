import React from 'react'
import styles from "./AboutUs.module.scss"
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'
import AboutMain from '../../components/AboutUsMain/AboutMain'
import OurTeam from '../../components/OurTeam/OurTeam'
import Form2 from '../../components/Form2/Form'

const AboutUs = () => {
  return (
    <div className={styles.AboutUs}>
      <Header/>
       <AboutMain/>
       <OurTeam/>
       <Form2/>
      <Footer/>
    </div>
  )
}

export default AboutUs
