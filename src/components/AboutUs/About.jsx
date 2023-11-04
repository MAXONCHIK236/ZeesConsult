import React, { useMemo } from "react";
import styles from "./About.module.scss";
import Devider from "../../devider/Devider";
import Team from "../TeamCard/Team";
import { CardInfoArr } from "../../constants/PeapleInfo";
import Ram from "../../blue__Ram/Ram";
import { RamText, RamText2 } from "./../../constants/ram";
import CursorLeft from "../../assents/cursor_decoration/LeftCursor.svg";
import Button from "../button/button";
import cursortop from "../../assents/cursor_decoration/TopCursor.svg";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  const renderCard = useMemo(
    () => CardInfoArr.map((article) => <Team {...article} />),
    []
  );
  const renderText = useMemo(
    () => RamText.map((article) => <Ram {...article} />),
    []
  );
  const renderText2 = useMemo(
    () => RamText2.map((article) => <Ram {...article} />),
    []
  );
  return (
    <div className={styles.About}>
      <div className={styles.Paragraph}>
        <Devider text={t("header.about")} />
      </div>
      <div className="container">
        <div className={styles.about__flex}>
          <div className={styles.about__left}>{renderCard}</div>
          <div className={styles.about__right}>
            {renderText}
            <div className={styles.button}>
              <img src={CursorLeft} alt="left" />
              <Button link="/AboutUs" text={t("header.next")} />
            </div>
          </div>
        </div>
        <div className={styles.about__under}>
          <img src={cursortop} alt="under" />
          {renderText2}
        </div>
      </div>
    </div>
  );
};

export default About;
