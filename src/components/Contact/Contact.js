//Dependencies
import React, { Component } from "react";
import ConnectBk from "./connectBk.png";
import "./contact.css";

//Create class component to render the contact page content
class Contact extends Component {
  render() {
    return (
      <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper">
            <h1>Connect</h1>
          </div>

          <div className="intro-wrapper" id="contact-intro-wrapper">
            <img id="connect-background-img" src={ConnectBk} alt="bio_pic" />

            <div className="content-wrapper">
              <h3 id="reach-out">Reach Out</h3>
              <ul className="contact">
                <li>
                  <a href="../../vanessaBau-resume.pdf" target="_blank">
                    Resume
                  </a>
                </li>
                <hr />
                <li>
                  <a href="https://github.com/vanessabau">Github</a>
                </li>
                <hr />
                <li>
                  <a href="https://www.linkedin.com/in/vanessa-bautista-45906b19b/">
                    Linkedin
                  </a>
                </li>
                <hr />
                <li>
                  <a href="mailto:vanessawebdev@gmail.com" target="_blank">
                    Email: vanessawebdev@gmail.com
                  </a>
                </li>
                <hr />
                <li>Phone: 916-225-4599</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//Export component
export default Contact;
