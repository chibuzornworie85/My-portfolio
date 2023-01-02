import React from "react";
import "./Skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <>
    <div id="skills" className="general">
        <h2 className="exper">My Experirence</h2>
        <div className="experience_container1">
            <div className="experience_frontend">
                <h3 className="front">Frontend Development</h3>
                <div className="experience_content">
                    <article className="experience_details">
                    <BsFillPatchCheckFill className='icons' />
                   <div>
                   <h4>HTML</h4>
                    <small className="text-light">Experienced</small>
                   </div>
                    </article>

                    <article className="experience_details">
                    <BsFillPatchCheckFill className='icons' />
                   <div>
                   <h4>CSS</h4>
                    <small className="text-light">Intermidate</small>
                   </div>
                    </article>

                    <article className="experience_details">
                    <BsFillPatchCheckFill className='icons' />
                    <div>
                    <h4>BOOTSTRAP</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                    </article>

                    <article className="experience_details">
                    <BsFillPatchCheckFill className='icons' />
                   <div>
                   <h4>JAVASCRIPT</h4>
                    <small className="text-light">Experienced</small>
                   </div>
                    </article>

                    <article className="experience_details">
                    <BsFillPatchCheckFill className='icons' />
                   <div>
                   <h4>REACT</h4>
                    <small className="text-light">Experienced</small>
                   </div>
                    </article>

                    <article className="experience_details">
                    <BsFillPatchCheckFill className='icons' />
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
                    <BsFillPatchCheckFill className='icons' />
                   <div>
                   <h4>NODE JS</h4>
                    <small className="text-light">Experienced</small>
                   </div>
                    </article>
                    <article className="experience_details">
                    <BsFillPatchCheckFill className='icons' />
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
