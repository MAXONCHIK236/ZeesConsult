import React, { useMemo } from "react";
import styles from "./ContactZee.module.scss";
import ContactCard from "../contactCard/ContactCard";
import { ContactCardArr } from "../../constants/contacts";
import Devider from "../../devider/Devider";
import { useTranslation } from "react-i18next";
const ContactZee = () => {
  const {t} = useTranslation();
  const renderCardContacts = useMemo(
    () => ContactCardArr.map((article) => <ContactCard {...article} />),
    []
  );
  return (
    <div className={styles.ContactZee}>
      <div className={styles.Paragraph}>
        <Devider text={t("header.contact")} />
      </div>
      <div className="container">
        <div className={styles.contact__flex}>{renderCardContacts}</div>
      </div>
    </div>
  );
};

export default ContactZee;
