import React, { useMemo } from "react";
import styles from "./Guarantee.module.scss";
import CursorLeft from "../../assents/cursor_decoration/LeftCursor.svg";
import guarantee from "../../assents/guarantee_img/guarantee.svg";
import { RamText3 } from "../../constants/ram";
import Devider from "../../devider/Devider";
import Ram from "../../blue__Ram/Ram";
import { useTranslation } from "react-i18next";
const Guarante = () => {
  const {t} = useTranslation();
  const renderText = useMemo(
    () => RamText3.map((article) => <Ram {...article} />),
    []
  );
  return (
    <div className={styles.guarantee}>
      <div className={styles.Paragraph}>
        <Devider text={t("Paragraph.garantee")} />
      </div>
      <div className="container">
        <div className={styles.guarantee__flex}>
          <div className={styles.guarantee__left}>
            <img src={guarantee} alt="icon" />
          </div>
          <div className={styles.guarantee__right}>
            {renderText}
            <img src={CursorLeft} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guarante;
