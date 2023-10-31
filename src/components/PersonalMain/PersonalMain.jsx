import React, { useMemo } from "react";
import styles from "./PersonalMain.module.scss";
import Devider from "../../devider/Devider";
import ArrowDown from "../../assents/team_img/arrow.svg";
import { RamText7 } from "../../constants/ram";
import BlueRam from "../../Blue__Ram2/BlueRam";
import bg from "../../assents/personal/bg.svg"
import RamButton from "../../ram__button/RamButton";
const PersonalMain = () => {
    const renderRam = useMemo(
        () => RamText7.map((article) => <BlueRam {...article} />),
        []
      );
  return (
    <div className={styles.PersonalMain}>
      <div className={styles.Paragraph}>
        <Devider text="Мы предлагаем услуги по трудоустройству в Германии" />
        <button>Работа в качестве студента</button>
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
