import React, { useMemo } from "react";
import styles from "./EmployerEurope.module.scss"
import ArrowDown from "../../assents/team_img/arrow.svg";
import Devider from '../../devider/Devider'
import { RamText4 } from '../../constants/ram'
import BlueRam from "../../Blue__Ram2/BlueRam";
import img1 from "../../assents/employer/bg4.jpg"
import img2 from "../../assents/employer/bg3.jpg"
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
        <Devider text={t("header.europe")} />
        <img src={ArrowDown} alt="Arrow" />
      </div>
     <div className="container">
        <div className={styles.EmployerEurope__bread}>
        <div className={styles.top}>
        {renderInfo}
        </div>
        <div className={styles.under}>
        <div className={styles.under__left}>
            <img src={img2} alt="img2" />
        </div>
        <div className={styles.under__right}>
            <img src={img1} alt="img1" />
        </div>
      </div>
      
      </div>
     </div>
      
    </div>
  )
}

export default EmployerEurope
