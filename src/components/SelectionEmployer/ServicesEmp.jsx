import React, { useMemo } from "react";
import styles from "./ServicesEmp.module.scss";
import { RamText5 } from "../../constants/ram";
import Ram3 from "../../blue__Ram3/Ram3";
import { SchemeText } from "../../constants/sheme";
import ChemeEmployer from "../../ChemeEmployer/ChemeEmployer";
const ServicesEmp = () => {
  const renderCard = useMemo(
    () => RamText5.map((article) => <Ram3 {...article} />),
    []
  );
  const renderSheme = useMemo(
    () => SchemeText.map((article) => <ChemeEmployer {...article} />),
    []
  );
  return (
    <div className={styles.ServicesEmployer}>
      <div className={styles.Paragraph}>
        <h1>Целевой подбор персонала в соответствии с вашими требованиями</h1>
      </div>
      <div style={{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        gap:"50px"
      }} className="container">
        <div className={styles.ServicesEmp__width}>
        {renderCard}
        </div>
        <div className={styles.Services__Cheme}>
         {renderSheme} 
        </div>
     
        </div>
    </div>
  );
};

export default ServicesEmp;
