import React, { useMemo } from "react";
import styles from "./PersonalMain.module.scss";
import Devider from "../../devider/Devider";
import ArrowDown from "../../assents/team_img/arrow.svg";
import { RamText7 } from "../../constants/ram";
import BlueRam from "../../Blue__Ram2/BlueRam";
import bg from "../../assents/personal/bg.svg"
import RamButton from "../../ram__button/RamButton";
import { useTranslation } from "react-i18next";
const PersonalMain = () => {
  const {t} =  useTranslation();
    const renderRam = useMemo(
        () => RamText7.map((article) => <BlueRam {...article} />),
        [t]
      );
  return (
    <div className={styles.PersonalMain}>
      <div className={styles.Paragraph}>
        <Devider text={t("About.Personal")}/>
        <button>{t("About.Work")}</button>
      </div>
      <img src={ArrowDown} alt="arrow" />
      <div className="container">
        <div className={styles.PersonalFlex}>
          <div className={styles.top}>
          {renderRam}
          </div>
          <div className={styles.middle}>
          <img src={bg} alt="bg" />
          </div>
          <div className={styles.under}>
          <RamButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalMain;
