import React from "react";
import { Link } from "react-router-dom";
import "./More.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const More = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div style={{ fontFamily: "Montserrat" }} id="about">
        <div className="page">
          <h4 className="page2">ABOUT</h4>
          <p data-aos="zoom-in" className="page1">
            I've always had the impression that I'm not the kind of person that
            joins in most of the activities my friends do, which has made me
            unique in every way. I always try to find a purpose in everything I
            set out to achieve, and I absorb lessons from the mistakes of others
            as long as they will help me progress. When I learned about software
            development, I was so excited to learn about it, that I devote all
            of my attention to learn how it works.
          </p>
          <Link to="/about" className="mik">
            MORE
          </Link>
        </div>
      </div>
    </>
  );
};

export default More;
