import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import emailjs from "emailjs-com";
import ArrowDown from "../../assents/arrow_down/Vector.svg";
import { Button } from "bootstrap";
import succesfull from "../../assents/header_img/Vector.svg"
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
  const [nameError, setNameError] = useState("");
  const [LastError, setLastError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [SubjectError, setSublectError] = useState("");
  const [MessageError, setMessageError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    let isValid = true;
    if (!isCheckboxChecked) {
      setCheckboxError("You must agree to the terms.");
      isValid = false;
    } else {
      setCheckboxError("");
    }
    if (name.trim() === "") {
      setNameError("Заполните поле");
      isValid = false;
    } else {
      setNameError("");
    }
    if (name.trim() === "") {
      setLastError("Заполните поле");
      isValid = false;
    } else {
      setLastError("");
    }
    if (name.trim() === "") {
      setPasswordError("Заполните поле");
      isValid = false;
    } else {
      setPasswordError("");
    }
    if (name.trim() === "") {
      setEmailError("Заполните поле");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (name.trim() === "") {
      setSublectError("Заполните поле");
      isValid = false;
    } else {
      setSublectError("");
    }
    if (name.trim() === "") {
      setMessageError("Заполните поле");
      isValid = false;
    } else {
      setMessageError("");
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
          setIsFormSubmitted(true);
          console.log("Email sent successfully");
        })
        .catch((error) => {
          console.error("Error sending email", error);
        });
    }
  };

  return (
  
    <div className={styles.ContactForm}>
  {isFormSubmitted ? (
    <div className={styles.successMessage}>
      <div className={styles.succesfull}>
        <img src={succesfull} alt="" />
      <p>Ваша форма отправлена успешно!</p>
      </div>
      < button
        onClick={() => {
          setIsFormSubmitted(false);
        }}
      >Перезагрузить форму</button>
       
   
    </div>
  ) : (
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
              if (e.target.value.trim() === "") {
                setNameError("Name is required");
              } else {
                setNameError(""); // No error if the input is not empty
              }
            }}
          />
          {nameError && <span className={styles.error}>{nameError}</span>}
          <input
            placeholder="LastName"
            type="text"
            value={text}
            onChange={(e) => {
              setLastName(e.target.value);
              if (e.target.value.trim() === "") {
                setLastError("Name is required");
              } else {
                setLastError("");
              }
            }}
          />
          {LastError && <span className={styles.error}>{LastError}</span>}

          <input
            placeholder="Number"
            type="text"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value.trim() === "") {
                setPasswordError("Name is required");
              } else {
                setPasswordError("");
              }
            }}
          />
          {PasswordError && (
            <span className={styles.error}>{PasswordError}</span>
          )}
          <input
            placeholder="Email"
            type="email"
            value1={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value.trim() === "") {
                setEmailError("Name is required");
              } else {
                setEmailError("");
              }
            }}
          />
           {EmailError && (
            <span className={styles.error}>{EmailError}</span>
          )}
          <div
            className={`${styles.dropdown} ${
              isDropdownOpen ? styles.open : ""
            }`}
          >
            <select
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                if (e.target.value.trim() === "") {
                  setSublectError("Name is required");
                } else {
                  setSublectError("");
                }
              }}
            >
              <option value="">
                <p>Выбор темы запроса </p>
                <img src={ArrowDown} alt="ArrowDown" />
              </option>
              <option
                onChange={(e) => {
                  setSubject(e.target.value);
                  if (e.target.value.trim() === "") {
                    setSublectError("Name is required");
                  } else {
                    setSublectError("");
                  }
                }}
                value="option1"
              >
                Студент
              </option>
              <option
                onChange={(e) => {
                  setSubject(e.target.value);
                  if (e.target.value.trim() === "") {
                    setSublectError("Name is required");
                  } else {
                    setSublectError("");
                  }
                }}
                value="option2"
              >
                Работодатель
              </option>
            </select>
          </div>
          {SubjectError && <span className={styles.error}>{SubjectError}</span>}
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
                if (e.target.value.trim() === "") {
                  setMessageError("Name is required");
                } else {
                  setMessageError("");
                }
              }}
            />
          </div>
          {MessageError && <span className={styles.error}>{MessageError}</span>}
          <div className={styles.contact__agree}>
            <input
              type="checkbox"
              name="checkbox"
              id="check"
              checked={isCheckboxChecked}
              onChange={(e) => {
                setIsCheckboxChecked(e.target.checked);
                setCheckboxError(
                  e.target.checked ? "" : "You must agree to the terms."
                );
              }}
            />
            <p>
              Нажимая кнопку “Продолжить”, Вы даете согласие на обработку Ваших
              личных данных компанией ZESS Consulting.
            </p>
          </div>
          {checkboxError && <span className={styles.error}>{checkboxError}</span>}
          <button
            onClick={handleFormSubmit}
            className={styles.btn__form}
            disabled={buttonDisabled}
          >
            {buttonDisabled ? "Processing..." : "Отправить"}
          </button>
        </form>
      </div>
  )}
    </div>
  );
  }



export default ContactForm;
