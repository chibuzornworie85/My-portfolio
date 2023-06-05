import React, { Component } from "react";
import "./Navigation.css";
import gewin from "../../Component/Image/Gewin1.png";
import { pro, pro1, pro2, pro3, pro4, pro5 } from "../../Data";
// import { render } from "@testing-library/react";

class Navigation extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div style={{ fontFamily: "Montserrat" }} className="all">
          <div className="nav">
            <div className="logo">
              <img src={gewin} alt="gewin" />
            </div>
            <div className="navi">
              <ul className={this.state.clicked ? "navi active" : "navi"}>
                <div className="kim">
                  {pro.map((link) => {
                    return (
                      <a href={link.url} key={link.id}>
                        {link.text}
                      </a>
                    );
                  })}
                </div>
                <div className="kim">
                  {pro1.map((link) => {
                    return (
                      <a href={link.url} key={link.id}>
                        {link.text}
                      </a>
                    );
                  })}
                </div>

                <div className="kim">
                  {pro4.map((link) => {
                    return (
                      <a href={link.url} key={link.id}>
                        {link.text}
                      </a>
                    );
                  })}
                </div>

                <div className="kim">
                  {pro2.map((link) => {
                    return (
                      <a href={link.url} key={link.id}>
                        {link.text}
                      </a>
                    );
                  })}
                </div>

                <div className="kim">
                  {pro5.map((link) => {
                    return (
                      <a href={link.url} key={link.id}>
                        {link.text}
                      </a>
                    );
                  })}
                </div>

                <div className="kim">
                  {pro3.map((link) => {
                    return (
                      <a href={link.url} key={link.id}>
                        {link.text}
                      </a>
                    );
                  })}
                </div>
              </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navigation;
