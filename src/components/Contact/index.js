import React, { useState } from "react";
import { Wrapper } from "./styles.js";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [validForm, setValidForm] = useState(false);

  const contactMessage = {
    from_name: name,
    reply_to: email,
    message,
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const sendEmail = (e) => {
    e.preventDefault();

    const errorCheck = {
      name: validName,
      email: validEmail,
      message: validMessage,
      form: validForm,
    };

    if (name === "") {
      setValidName(false);
      errorCheck.name = false;
    }

    if (!emailRegex.test(email)) {
      setValidEmail(false);
      errorCheck.email = false;
    }

    if (message === "") {
      setValidMessage(false);
      errorCheck.message = false;
    }

    if (!errorCheck.message || !errorCheck.email || !errorCheck.name) {
      setValidForm(false);
      return;
    }

    if (errorCheck.message && errorCheck.email && errorCheck.name) {
      setValidForm(true);
      errorCheck.form = true;

      if (errorCheck.form) {
        emailjs
          .send(
            //  SERVICE_ID,
            //  TEMPLATE_ID,
            contactMessage
            //  USER_ID
          )
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
          })
          .catch((error) => {
            console.log("FAILED...", error);
          });
      }
    }
  };
  return (
    <Wrapper>
      <div className="contact-page">
        <h1 className="contact-header">Contact Us!</h1>
        <div className="contact-form">
          If you're running into technical problems, or would like to just drop
          us a line, use the contact form below and we'll get back to you as
          soon as we can!
        </div>
        <div className="contact-inputs">
          <input
            className={validName ? "valid-input" : "invalid-input"}
            type="text"
            placeholder="Name"
            name="from_name"
            onChange={(e) => {
              setName(e.target.value);
              setValidName(true);
            }}
          />
          <input
            className={validEmail ? "valid-input" : "invalid-input"}
            type="email"
            placeholder="Contact Email"
            name="reply_to"
            onChange={(e) => {
              setEmail(e.target.value);
              setValidEmail(true);
            }}
          />
          {/* XXXXX this needs to be bigger in both height and width */}
          <textarea
            className={validMessage ? "valid-input" : "invalid-input"}
            placeholder="Your Question/Commission/Print Details/Love Letter"
            name="message"
            onChange={(e) => {
              setMessage(e.target.value);
              setValidMessage(true);
            }}
          />
          <button className="button" type="button" onClick={sendEmail}>
            Submit
          </button>
        </div>
        {validForm ? (
          <div className="thank-you-message">
            Thanks for the message. We'll get back to you as soon as we can!
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Wrapper>
  );
}
