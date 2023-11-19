import React from "react";
import styles from "./Contacts.module.scss";
import Header from "../../components/header/Header";
import ContactPicture from "../../components/ContactsPicture/ContactPicture";
import ContactZee from "../../components/ContactsZee/ContactZee";
import ContactForm from "../../components/ConatctForm/ContactForm";
import Footer from "../../components/Footer/Footer";
const Contacts = () => {
  return (
    <div className={styles.Contacts}>
      <Header />
      <ContactPicture />
      <ContactZee />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contacts;
