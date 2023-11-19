import React from "react";
import styles from "./Main.module.scss";
import Header from "../../components/header/Header";
import Main from './../../components/main/main';
import Guarante from "../../components/Guarantee/Guarante";
import Footer from "../../components/Footer/Footer";

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
