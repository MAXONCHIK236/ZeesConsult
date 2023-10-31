import React, { useMemo } from "react";
import styles from "./Advantages.module.scss";
import Devider from "../../devider/Devider";
import { RamText6 } from "../../constants/ram";
import Ram3 from "../../blue__Ram3/Ram3";
import RamButton from "../../ram__button/RamButton";

const Advantages = () => {
  const renderCard = useMemo(
    () => RamText6.map((article) => <Ram3 {...article} />),
    []
  );
  return (
    <div className={styles.Advantages}>
      <div className={styles.Paragraph}>
        <Devider text="Ваши преимущества" />
      </div>
      <div className="container">
        <div className={styles.adventage__flex}>
          <div className={styles.container__top}>{renderCard}</div>
          <div className={styles.container__bottom}>
            <RamButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
