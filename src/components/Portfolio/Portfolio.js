import React, { Component } from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import props from "../../props.json";
import "./portfolio.css";

class Portfolio extends Component {
  state = {
    props,
  };

  render() {
    return (
      <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper">
            <h1>Portfolio</h1>
          </div>

          <div className="post-wrapper">
            {this.state.props.map((prop) => (
              <PortfolioCard
                id={prop.id}
                key={prop.id}
                name={prop.name}
                image={prop.image}
                href={prop.href}
                github={prop.github}
              />
            ))}

            {/* <div className="right-column"></div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
