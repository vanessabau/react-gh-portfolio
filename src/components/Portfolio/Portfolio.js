//Dependencies
import React, { Component } from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import props from "../../props.json";
import "./portfolio.css";

//Create class component to pass portfolio information from props.json to the portfolio page and render the page. The cards will be rendered through the <PortfolioCard/> component
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
          </div>
        </div>
      </section>
    );
  }
}

//Export component
export default Portfolio;
