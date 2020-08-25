//Dependencies
import React, { Component } from "react";
import BioPic from "../BioPic/BioPic";
import AboutText from "../AboutText/AboutText";
import props from "../../props.json";
import "./about.css";

//Create class component and pass props from props.json
class About extends Component {
  state = {
    props,
  };
  render() {
    return (
      <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper" id="welcome-wrapper">
            <h1>Welcome, I'm Vanessa Ro</h1>
          </div>
          <div className="intro-wrapper" id="about-intro-wrapper">
            <div className="left-column">
              <BioPic />
            </div>

            <div className="right-column">
              <AboutText />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//Export
export default About;
