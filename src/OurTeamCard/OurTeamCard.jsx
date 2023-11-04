import React from "react";
import styles from "./OurTeamCard.module.scss";
import { useTranslation } from "react-i18next";
const OurTeamCard = ({img, Name,WhoIsIt}) => {
  const {t} = useTranslation()
  return (
    <div className={styles.OurTeamCard}>
      <img src={img} alt="icon" />
      <h1> {t(Name)}</h1>
      <p>{t(WhoIsIt)}</p>
    </div>
  );
};

export default OurTeamCard;
