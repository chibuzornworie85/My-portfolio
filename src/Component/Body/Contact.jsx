import React from "react";
import "./Contact.css";
import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_aio3uao', 'template_0z8n30i', form.current, 'd1E2ZIXIcieK3MmmV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
        <div className="al" id="contact">
          <h1 className="h1">Contact Form</h1>
          <form className="label" ref={form} onClick={sendEmail}>
            <label className="nam">Name</label>
            <input type="text" name="name" className="input" />

            <label className="nam">Email</label>
            <input type="email" name="user_email" className="input1" />

            <label className="nam">Message</label>
            <textarea type="message" name="message" rows="5" className="input2" />
            <input type="submit" className="input3" />
          </form>
          <p className="copy">
            &copy; 2023 by Prince Gewin <br /> +234 913 599 7163.
          </p>
        </div>
    </>
  );
};

export default Contact;
