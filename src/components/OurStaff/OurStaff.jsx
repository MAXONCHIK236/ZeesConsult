import React, { useMemo } from 'react'
import styles from "./OurStaff.module.scss"
import { TeamArr } from '../../constants/Team';
import OurTeamCard from '../../OurTeamCard/OurTeamCard';
import ArrowDown from "../../assents/team_img/arrow.svg"
import Devider from '../../devider/Devider';
const OurStaff = () => {
    const renderTeam = useMemo(
        () => TeamArr.map((article) => <OurTeamCard {...article} />),
        []
      );
  return (
    <div className={styles.OurStaff}>
        <div className={styles.Paragraph}>
        <Devider text="Наша Команда" />
        <img src={ArrowDown} alt="Arrow" />
      </div>
      <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"}} className="container2">
        <div className={styles.our__flex}>
       {renderTeam}
        </div>
      </div>
      
    </div>
  )
}

export default OurStaff
