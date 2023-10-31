import React from "react";
import styles from "./ServicesEmployer.module.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import MainEmployer from "../../components/MainEmployer/MainEmployer";
import EmployerEurope from "../../components/EmployerEurope/EmployerEurope";
import ServicesEmp from "../../components/SelectionEmployer/ServicesEmp";
import Advantages from "../../components/UrAdvantages/Advantages";
const ServicesEmployer = () => {
  return (
    <div className={styles.ServicesEmployer}>
      <Header />
      <MainEmployer />
      <EmployerEurope />
      <ServicesEmp />
      <Advantages/>
      <Footer/>
    </div>
  );
};

export default ServicesEmployer;
