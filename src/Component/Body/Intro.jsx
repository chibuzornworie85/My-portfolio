import React from "react";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Intro.css";
import img3 from "../Image/img.jpg";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import CV from "../../../src/Document/Chibuzor_CV.pdf";

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <div className="all1">
        <div data-aos="zoom-in" className="body">
          <div className="img">
            <img src={img3} alt="this an img" />
          </div>
          <div className="text">
            <p className="tex">Hello There!</p>
            <h4 className="h4">I'M PRINCE GEWIN</h4>
            <p className="full">SOFTWARE ENGINEER</p>
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              className="no"
              target="_blank"
            >
              chibuzornworie85@gmail.com
            </a>
            <p className="num">+234 913 599 7163</p>
            <button className="cv">
              <a href={CV} download="Chibuzor_CV.pdf" className="cv1">
                Download CV
              </a>
            </button>
          </div>
        </div>

        <div className="images">
          <div className="lin">
            <a
              href="https://www.linkedin.com/in/nworie-chibuzor-ab975a250/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="twit">
            <a href="https://twitter.com/ChibuzorNworie" target="_blank">
              <BsTwitter />
            </a>
          </div>
          <div className="what">
            <a href="https://wa.me/+2349135997163" target="_blank">
              <BsWhatsapp />
            </a>
          </div>
          <div className="you">
            <a
              href="https://www.youtube.com/channel/UC6opSKlYO7Otu-2r_kcZhWg"
              target="_blank"
            >
              <BsYoutube className="you" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
