import React, { useMemo } from "react";
import styles from "./Questions.module.scss";
import { questionarr } from './../../constants/questions';
import QuestionSheme from "../QuestionsSheme/QuestionSheme";
import ArrowDown from "../../assents/team_img/arrow.svg"
import Devider from "../../devider/Devider";
const Questions = () => {
    const renderSheme = useMemo(
        () => questionarr.map((article) => <QuestionSheme {...article} />),
        []
      );
  return (
    <div className={styles.Questions}>
         <div className={styles.Paragraph}>
        <Devider text="Наша Команда" />
        <img src={ArrowDown} alt="Arrow" />
      </div>
      <div  className="container2">
        <div className={styles.questiongap}>
      {renderSheme}
      </div>
      </div>
    </div>
  );
};

export default Questions;
