import React, { useMemo } from "react";
import styles from "./OurTeam.module.scss";
import Devider from "./../../devider/Devider";
import ArrowDown from "../../assents/team_img/arrow.svg";
import OurTeamCard from "./../../OurTeamCard/OurTeamCard";
import { TeamArr, TextArr } from "../../constants/Team";
import { useTranslation } from "react-i18next";
const OurTeam = () => {
  const {t} = useTranslation();
  const renderTeam = useMemo(
    () => TeamArr.map((article) => <OurTeamCard {...article} />),
    []
  );
  const renderText = useMemo(() => TextArr.map((article) => <div className={styles.render__text}><p>{t(article.text)}</p></div>), [t]);

  return (
    <div className={styles.OurTeam}>
      <div className={styles.Paragraph}>
        <Devider text={t("About.OurTeam")} />
        <img src={ArrowDown} alt="Arrow" />
      </div>
      <div className="container2">
        <div className={styles.our__flex}>
          <div className={styles.our__left}>{renderText}</div>
          <div className={styles.our__right}>{renderTeam}</div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
