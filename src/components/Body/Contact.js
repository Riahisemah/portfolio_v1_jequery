import React, { useState, useRef } from "react";
import ScrollTriggeredSection from "../Body/ScrollSection";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isInputValid, setIsInputValid] = useState(false);
  const [isTextareaValid, setIsTextareaValid] = useState(false);
  const inputRef = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    const submitButton = document.getElementById("submit-form");
    submitButton.textContent = "Loading..";
    submitButton.style.background = "orange";
    submitButton.style.color = "white";
    const overlay = document.querySelector(".overlay");
    e.preventDefault();
    e.stopPropagation();
    e.preventDefault();
    overlay.style.display = "block";

    emailjs
      .sendForm(
        "service_2iqm6xi",
        "template_2vlovol",
        form.current,
        "0bn5rPFBDMsS8xqDJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();

          submitButton.textContent = "Sent !";
          submitButton.style.background = "green";
          setIsTextareaValid(false);
          setIsInputValid(false);

          setTimeout(function () {
            submitButton.textContent = "Send";
            submitButton.style.background = "black";
            submitButton.style.color = " #03e9f4";
            overlay.style.display = "none";
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
          setIsTextareaValid(false);
          setIsInputValid(false);
          submitButton.textContent = "ERROR !";
          submitButton.style.backgroundColor = "red";
          submitButton.style.color = "white";

          setTimeout(function () {
            submitButton.textContent = "Send";
            submitButton.style.backgroundColor = "black";
            submitButton.style.color = " #03e9f4";
            overlay.style.display = "none";
          }, 3000);
        }
      );
  };

  const handleInputChange = (event) => {
    const inputValue = inputRef.current.value;
    const isValid = /@(gmail|outlook)\.com$/.test(inputValue);

    if (!isValid) {
      inputRef.current.setCustomValidity(
        "Please enter a valid email ending with '@gmail.com' or '@outlook.com'"
      );
    } else {
      inputRef.current.setCustomValidity("");
    }
    if (inputValue.length > 0) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  };

  const handleTextareaChange = (event) => {
    const emailValue = event.target.value;
    if (emailValue.length > 0) {
      setIsTextareaValid(true);
    } else {
      setIsTextareaValid(false);
    }
  };

  return (
    <ScrollTriggeredSection sectionId={"fourth-section"}>
      <div className="contact-box">
        <div className="overlay"></div>
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="user-box">
            <input type="text" autoComplete="off" name="user_name" required />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              autoComplete="off"
              ref={inputRef}
              title="Please enter a valid email ending with '@gmail.com'"
              pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
              onChange={handleInputChange}
              className={isInputValid ? "has-value" : ""}
              name="user_email"
              required
            />
            <label>Email</label>
          </div>
          <div className="message-box">
            <textarea
              name="message"
              onChange={handleTextareaChange}
              className={isTextareaValid ? "has-value" : ""}
              rows={3}
              cols={6}
              required
            />
            <label>Message</label>
          </div>
          <button type="submit" id="submit-form">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Send
          </button>
        </form>
      </div>
    </ScrollTriggeredSection>
  );
};

export default Contact;
