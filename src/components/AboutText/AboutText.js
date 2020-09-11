//Dependencies
import React from "react";

//Create functional component to render the about-text
function AboutText() {
  return (
    <>
      <div>
        <div id="preview-shadow">
          <div id="preview">
            <div id="corner-tl" className="corner"></div>
            <div id="corner-tr" className="corner"></div>

            <h3 id="preview-header">Full Stack Awesomeness</h3>
            <p id="preview-text">
              Can-do on steroids. <br />
              I love to build web applications. <br />
              Let me build one for you. Woop woop react-gh-portfolio
            </p>

            <div id="corner-br" className="corner"></div>
            <div id="corner-bl" className="corner"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutText;
