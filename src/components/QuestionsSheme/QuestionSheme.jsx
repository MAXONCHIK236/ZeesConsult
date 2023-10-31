import React from 'react'
import styles from "./QuestionSheme.module.scss"
import question from "../../assents/questions/question.svg"
import ArrowDown from "../../assents/team_img/arrow.svg"
const QuestionSheme = ({text, answer}) => {
  return (
    <div className={styles.QuestionsSheme}>
        <div className={styles.sheme1}>
            <div className={styles.flex}>
              <div> <img src={question} alt="question" /></div>
           
            <div className={styles.text__sheme}>
                <p>{text}</p>
            </div>
            </div>
            <img src={ArrowDown} alt="arrow" />
            <div className={styles.blue__ram}>
             <a>{answer}</a>
            </div>
        </div>
      
    </div>
  )
}

export default QuestionSheme
