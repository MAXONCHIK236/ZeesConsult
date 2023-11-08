import React, { useMemo } from "react";
import styles from "./Questions.module.scss";
import { questionarr } from './../../constants/questions';
import QuestionSheme from "../QuestionsSheme/QuestionSheme";
import ArrowDown from "../../assents/team_img/arrow.svg"
import Devider from "../../devider/Devider";
import { useTranslation } from "react-i18next";
const Questions = () => {
  const {t} = useTranslation();
    const renderSheme = useMemo(
        () => questionarr.map((article) => <QuestionSheme {...article} />),
        [t]
      );
  return (
    <div className={styles.Questions}>
         <div className={styles.Paragraph}>
        <Devider text={t("Paragraph.question")} />
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
