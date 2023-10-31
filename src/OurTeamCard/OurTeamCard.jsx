import React from "react";
import styles from "./OurTeamCard.module.scss";
const OurTeamCard = ({img, Name,WhoIsIt}) => {
  return (
    <div className={styles.OurTeamCard}>
      <img src={img} alt="icon" />
      <h1> {Name}</h1>
      <p>{WhoIsIt}</p>
    </div>
  );
};

export default OurTeamCard;
