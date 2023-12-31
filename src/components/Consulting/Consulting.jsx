import React, { useMemo } from "react";
import styles from "./Consulting.module.scss";
import Devider from "../../devider/Devider";
import bg1 from "../../assents/employer/bg1.jpg";
import bg2 from "../../assents/employer/bg2.jpg";
import { PicturesArr, RamText8 } from "../../constants/ram";
import BlueRam from "../../Blue__Ram2/BlueRam";
import ArrowDown from "../../assents/team_img/arrow.svg";
import Ramka from "../../Ram/Ramka";
import { useTranslation } from "react-i18next";
const Consulting = () => {
  const {t} = useTranslation();
  const renderRam = useMemo(
    () => RamText8.map((article) => <BlueRam {...article} />),
    []
  );
  const renderPictures = useMemo(
    () =>
      PicturesArr.map((item) => (
        <div>
          <img src={item.Img} alt="img" />
        </div>
      )),
    []
  );
  return (
    <div className={styles.Consulting}>
      <div className={styles.Paragraph}>
        <Devider text={t("Paragraph.Consulting")} />
      </div>
      <div style={{ display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        }} className="container">
        <div className={styles.Consulting__flex}>
          <div className={styles.left}>
            <img src={bg1} alt="bg" />
          </div>
          <div className={styles.right}>
            <div className={styles.searchers}> {renderRam}</div>
            <div className={styles.intellect}>
            <img src={bg2} alt="bg" />
            </div>
          </div>
        </div>
        <img src={ArrowDown} alt="down" />
        <div className={styles.flex}>{renderPictures}</div>
        <div className={styles.ram}>
          <Ramka/>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
