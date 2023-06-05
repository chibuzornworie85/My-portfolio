import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { useRef, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const navigate = useNavigate();

  const validateForm = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setNameError("Please add your name.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (message.trim() === "") {
      setMessageError("Please drop a contact message");
      return;
    }

    navigate("/");
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_aio3uao",
        "template_0z8n30i",
        form.current,
        "d1E2ZIXIcieK3MmmV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="al" id="contact">
        <h1 className="h1" data-aos="zoom-in">
          Contact Form
        </h1>
        <form
          data-aos="zoom-in"
          style={{ fontFamily: "Montserrat" }}
          className="label"
          ref={form}
          onSubmit={validateForm}
          onClick={sendEmail}
        >
          <label className="nam">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className="input"
          />
          {nameError && <p>{nameError}</p>}
          <label className="nam">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="user_email"
            className="input1"
          />
          {emailError && <p>{emailError}</p>}
          <label className="nam">Message</label>
          <textarea
            type="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            rows="5"
            className="input2"
          />
          {messageError && <p>{messageError}</p>}
          <input type="submit" className="input3" />
        </form>
        <div style={{ fontFamily: "Montserrat" }}>
          <p className="copy">
            &copy; 2023 by Prince Gewin <br /> +234 913 599 7163.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
