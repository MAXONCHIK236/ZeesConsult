import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import emailjs from "emailjs-com";
import ArrowDown from "../../assents/arrow_down/Vector.svg";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [subject1, setSubject1] = useState("");
  const [message, setMessage] = useState("");
  const [text, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [nameErr, setNameError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    setButtonDisabled(true);
    if (name.trim() === "") {
      setNameError("error");
      isValid = false;
    } else {
      setNameError("");
    }
    setTimeout(() => {
      setButtonDisabled(false);
    }, 60000);

    if (isValid) {
      const serviceId = "service_ec0nuv9";
      const templateId = "template_lnb53ok";
      const userId = "ae5-bU9qaERVPbxVT";

      let selectedText = "";
      if (subject === "option1") {
        selectedText = "Студент";
      } else if (subject === "option2") {
        selectedText = "Работодатель";
      } else {
        selectedText = "";
      }

      const templateParams = {
        name,
        email,
        subject: selectedText,
        message,
        text,
        password,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then(() => {
          setName("");
          setEmail("");
          setSubject("");
          setSubject1("");
          setMessage("");
          setLastName("");
          setNumber("");
          setPassword("");
          console.log("Email sent successfully");
        })
        .catch((error) => {
          console.error("Error sending email", error);
        });
    }
  };

  return (
    <div className={styles.ContactForm}>
      <div style={{ width: "90%" }} className="container">
        <form>
          <div className={styles.Paragraph}>
            <h1>Заполните ваши данные</h1>
          </div>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
              {
                nameErr && <span className={styles.error}>{nameErr}</span>;
              }
            }}
          />

          <input
            placeholder="LastName"
            type="text"
            value={text}
            onChange={(e) => {
              setLastName(e.target.value);
              setNameError("");
              {
                nameErr && <span className={styles.error}>{nameErr}</span>;
              }
            }}
          />

          <input
            placeholder="Number"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value1={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            className={`${styles.dropdown} ${
              isDropdownOpen ? styles.open : ""
            }`}
          >
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">
                <p>Выбор темы запроса </p>
                <img src={ArrowDown} alt="ArrowDown" />
              </option>
              <option
                onChange={(e) => setSubject(e.target.value)}
                value="option1"
              >
                Студент
              </option>
              <option
                onChange={(e) => setSubject(e.target.value)}
                value="option2"
              >
                Работодатель
              </option>
            </select>
          </div>
          <div className={styles.message}>
            <h1>Введите сообщение</h1>
          </div>
          <div className={styles.form__message}>
            <input
              className={styles.input__message}
              placeholder="Message"
              type="text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setNameError("");
              }}
            />
          </div>

          <div className={styles.contact__agree}>
            <input type="checkbox" name="checkbox" id="check" />
            <p>
              Нажимая кнопку “Продолжить”, Вы даете согласие на обработку Ваших
              личных данных компанией ZESS Consulting.
            </p>
          </div>
          <button
            onClick={handleFormSubmit}
            className={styles.btn__form}
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "Processing..." : "Отправить"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
