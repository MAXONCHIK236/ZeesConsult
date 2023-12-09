import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import emailjs from "emailjs-com";
import ArrowDown from "../../assents/arrow_down/Vector.svg";
import succesfull from "../../assents/header_img/Vector.svg";
import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [text, setLastName] = useState("");
  const [password, setPassword] = useState("");
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
      setNameError(t("Contact.add"));
      isValid = false;
    } else {
      setNameError("");
    }
    if (name.trim() === "") {
      setLastError(t("Contact.add"));
      isValid = false;
    } else {
      setLastError("");
    }
    if (name.trim() === "") {
      setPasswordError(t("Contact.add"));
      isValid = false;
    } else {
      setPasswordError("");
    }
    if (name.trim() === "") {
      setEmailError(t("Contact.add"));
      isValid = false;
    } else {
      setEmailError("");
    }
    if (name.trim() === "") {
      setSublectError(t("Contact.add"));
      isValid = false;
    } else {
      setSublectError("");
    }
    if (name.trim() === "") {
      setMessageError(t("Contact.add"));
      isValid = false;
    } else {
      setMessageError("");
    }
    setTimeout(() => {
      setButtonDisabled(false);
    }, 10000);
    if (isValid) {
      const serviceId = "service_nayws9n";
      const templateId = "template_s4zk4oh";
      const userId = "-8JKns1ENaDmu0W-m";

      let selectedText = "";
      if (subject === "option1") {
        selectedText = "Соискатель";
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
          setMessage("");
          setLastName("");
          setPassword("");
          setIsFormSubmitted(true);
          console.log("Email sent successfully");
        })
        .catch((error) => {
          console.error("Error sending email", error);
        });
  };
}
  return (
    <div className={styles.ContactForm}>
      {isFormSubmitted ? (
        <div className={styles.successMessage}>
          <div className={styles.succesfull}>
            <img src={succesfull} alt="" />
            <p>{t("Contact.form")}</p>
          </div>
          <button
            onClick={() => {
              setIsFormSubmitted(false);
            }}
          >
            {t("Contact.reload")}
          </button>
        </div>
      ) : (
        <div style={{ width: "90%" }} className="container">
          <form>
            <div className={styles.Paragraph}>
              <h1>{t("Contact.valueUser")}</h1>
            </div>
            <input
              placeholder={t("Contact.name")}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (e.target.value.trim() === "") {
                  setNameError("Name is required");
                } else {
                  setNameError("");
                }
              }}
            />
            {nameError && <span className={styles.error}>{nameError}</span>}
            <input
              placeholder={t("Contact.lastname")}
              type="text"
              value={text}
              onChange={(e) => {
                setLastName(e.target.value);
                if (e.target.value.trim() === "") {
                  setLastError("LastName is required");
                } else {
                  setLastError("");
                }
              }}
            />
            {LastError && <span className={styles.error}>{LastError}</span>}

            <input
              placeholder={t("Contact.number")}
              type="text"
              value={password}
              onChange={(e) => {
                const inputValue = e.target.value;
                setPassword(inputValue);
                setPassword(e.target.value);
                if (e.target.value.trim() === "") {
                  setPasswordError("Number is required");
                } else {
                  setPasswordError("");
                }
                if (!/^\d$/.test(inputValue)) {
                  setPasswordError("Phone number should contain only numbers.");
                } else {
                  setPasswordError("");
                }
              }}
            />
            {PasswordError && (
              <span className={styles.error}>{PasswordError}</span>
            )}
            <input
              placeholder={t("Contact.Email")}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value.trim() === "") {
                  setEmailError("Email is required");
                } else {
                  setEmailError("");
                }
                if (e.target.value.trim() === "" || !e.target.value.includes("@")) {
                  setEmailError("Please enter a valid email address.");
                } else {
                  setEmailError("");
                }
              }
             }
            />
            {EmailError && <span className={styles.error}>{EmailError}</span>}
            <div className={styles.dropdown}>
              <select
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  if (e.target.value.trim() === "") {
                    setSublectError("subject is required");
                  } else {
                    setSublectError("");
                  }
                }}
              >
                <option value="">
                  <p> {t("Contact.choise")} </p>
                  <img src={ArrowDown} alt="ArrowDown" />
                </option>
                <option
                  onChange={(e) => {
                    setSubject(e.target.value);
                    if (e.target.value.trim() === "") {
                      setSublectError("Searcher is required");
                    } else {
                      setSublectError("");
                    }
                  }}
                  value="option1"
                >
                  {t("Contact.Student")}
                </option>
                <option
                  onChange={(e) => {
                    setSubject(e.target.value);
                    if (e.target.value.trim() === "") {
                      setSublectError("Employer is required");
                    } else {
                      setSublectError("");
                    }
                  }}
                  value="option2"
                >
                  {t("Contact.employer")}
                </option>
              </select>
            </div>
            {SubjectError && (
              <span className={styles.error}>{SubjectError}</span>
            )}
            <div className={styles.message}>
              <h1>{t("Contact.message")}</h1>
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
                    setMessageError("Message is required");
                  } else {
                    setMessageError("");
                  }
                }}
              />
            </div>
            {MessageError && (
              <span className={styles.error}>{MessageError}</span>
            )}
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
              <p>{t("Contact.next")}</p>
            </div>
            {checkboxError && (
              <span className={styles.error}>{checkboxError}</span>
            )}
            <button
              onClick={handleFormSubmit}
              className={styles.btn__form}
              disabled={buttonDisabled}
            >
              {buttonDisabled ? "Processing..." : t("Contact.send")}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};


export default ContactForm;
