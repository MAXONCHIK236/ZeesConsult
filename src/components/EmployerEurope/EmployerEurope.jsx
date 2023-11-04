import React, { useMemo } from "react";
import styles from "./EmployerEurope.module.scss"
import ArrowDown from "../../assents/team_img/arrow.svg";
import Devider from '../../devider/Devider'
import Ram from '../../blue__Ram/Ram'
import { RamText4 } from '../../constants/ram'
import BlueRam from "../../Blue__Ram2/BlueRam";
import img1 from "../../assents/employer/bg1.svg"
import img2 from "../../assents/employer/bg2.svg"
import { useTranslation } from "react-i18next";
const EmployerEurope = () => {
  const {t} = useTranslation();
    const renderInfo = useMemo(
        () => RamText4.map((article) => <BlueRam {...article} />),
        []
      );
  return (
    <div className={styles.EmployerEurope}>
         <div className={styles.Paragraph}>
        <Devider text={t("About.OurTeam")} />
        <img src={ArrowDown} alt="Arrow" />
      </div>
     <div className="container">
        <div className={styles.EmployerEurope__bread}>
        <div className={styles.top}>
        {renderInfo}
        </div>
        <div className={styles.under}>
        <div className={styles.under__left}>
            <img src={img2} alt="" />
        </div>
        <div className={styles.under__right}>
            <img src={img1} alt="" />
        </div>
      </div>
      
      </div>
     </div>
      
    </div>
  )
}

export default EmployerEurope
