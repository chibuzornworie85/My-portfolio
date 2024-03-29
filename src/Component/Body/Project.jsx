import React from "react";
import "./Project.css";
import mage from "../../Component/Image/im.jpg";
import mage2 from "../../Component/Image/dog.jpg";
import mage3 from "../../Component/Image/music.jpg";
import mage4 from "../../Component/Image/boot1.jpg";
import mage5 from "../../Component/Image/lap-image.jpeg";
import mage6 from "../../Component/Image/image.jpg";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div style={{ fontFamily: "Montserrat" }} id="project" className="port">
        <h2 className="jos1">Portfolio</h2>
        <div data-aos="zoom-in" className="portfolio_container">
          <article className="portfolio_item">
            <div className="portfoili_item-image">
              <img src={mage} alt="yh" className="my" />
            </div>
            <h3>Personal portfolio</h3>
            <div className="git">
              <a
                href="https://github.com/chibuzornworie85/-My-Portfolio"
                className="bt"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://my-portfolio-git-master-chibuzornworie85.vercel.app/"
                target="_blank"
                className="bt-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio_item">
            <div className="portfoili_item-image">
              <img src={mage2} alt="yh" className="my" />
            </div>
            <h3>This return the breed type which you select</h3>
            <div className="git">
              <a
                href="https://github.com/chibuzornworie85/Bleed-of-Dogs"
                className="bt"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://breed-of-dogs.vercel.app/"
                target="_blank"
                className="bt-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio_item">
            <div className="portfoili_item-image">
              <img src={mage3} alt="yh" className="my" />
            </div>
            <h3>Music player</h3>
            <div className="git">
              <a
                href="https://github.com/chibuzornworie85/Music-App"
                className="bt"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://music-app-pi-ten.vercel.app/"
                target="_blank"
                className="bt-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio_item">
            <div className="portfoili_item-image">
              <img src={mage4} alt="yh" className="my" />
            </div>
            <h3>React landing page</h3>
            <div className="git">
              <a
                href="https://github.com/chibuzornworie85/Landing-page"
                className="bt"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://landing-page-rosy-one.vercel.app/"
                target="_blank"
                className="bt-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio_item">
            <div className="portfoili_item-image">
              <img src={mage5} alt="yh" className="my" />
            </div>
            <h3>First React project</h3>
            <div className="git">
              <a
                href="https://github.com/chibuzornworie85/My-Project"
                className="bt"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://my-project-theta-rosy.vercel.app/"
                target="_blank"
                className="bt-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio_item">
            <div className="portfoili_item-image">
              <img src={mage6} alt="yh" className="my" />
            </div>
            <h3>Bina's makeover web</h3>
            <div className="git">
              <a
                href="https://github.com/chibuzornworie85/Bina-s-make-over"
                className="bt"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://bina-s-make-over.vercel.app/"
                target="_blank"
                className="bt-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Blog;
