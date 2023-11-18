import React from "react";
import styles from "./Main.module.scss";
import Header from "../../components/header/Header";
import Main from './../../components/main/main';
import About from "../../components/AboutUs/About";
import Guarante from "../../components/Guarantee/Guarante";
import Sheme from "../../components/Sheme/Sheme";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";

const MainPage = () => {
  return (
    <div className={styles.Main}>
      <Header />
      <Main />
      <Guarante />
      <Footer />
    </div>
  );
};

export default MainPage;
