import React from "react";
import "./Skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div style={{ fontFamily: "Montserrat" }} id="skills" className="general">
        <h2 className="exper">My Experirence</h2>
        <div data-aos="zoom-in" className="experience_container1">
          <div className="experience_frontend">
            <h3 className="front">Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsFillPatchCheckFill className="icons" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="icons" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermidate</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="icons" />
                <div>
                  <h4>BOOTSTRAP</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="icons" />
                <div>
                  <h4>JAVASCRIPT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="icons" />
                <div>
                  <h4>REACT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsFillPatchCheckFill className="icons" />
                <div>
                  <h4>TAILWIND</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience_backend">
            <h3 className="front">Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsFillPatchCheckFill className="icons" />
                <div>
                  <h4>NODE JS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <BsFillPatchCheckFill className="icons" />
                <div>
                  <h4>PYTHON</h4>
                  <small className="text-light">Intermidate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
