import React, { useState } from 'react';
import styles from './DropList.module.scss'; 
import ArrowDown from "../../assents/arrow_down/Vector.svg"
function DropList({}) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const templateParams = [
    subject,
    message
  ]
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn} onClick={toggleDropdown}>
      <p>Выбор темы запроса </p> <img src={ArrowDown} alt="" />
      </button>
      <div className={`${styles.contentdown} ${isDropdownOpen ? styles.open : ''}`}>
        <input
          placeholder="Subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          className={styles.input__message}
          placeholder="Message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}

export default DropList;
