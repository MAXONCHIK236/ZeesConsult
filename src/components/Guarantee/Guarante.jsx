import React, { useMemo } from "react";
import styles from "./Guarantee.module.scss";
import CursorLeft from "../../assents/cursor_decoration/LeftCursor.svg";
import guarantee from "../../assents/guarantee_img/guarantee.jpg";
import { RamText3 } from "../../constants/ram";
import Devider from "../../devider/Devider";
import { useTranslation } from "react-i18next";
import Ram3 from "../../blue__Ram3/Ram3";
import Form from "../Form/Form";

const Guarante = () => {
  const {t} = useTranslation();
  const renderText = useMemo(
    () => RamText3.map((article) => <Ram3 {...article} />),
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
          <Form/>
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
