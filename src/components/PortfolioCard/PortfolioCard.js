import React from "react";
import "./portfolioCard.css";

function PortfolioCard(props) {
  return (
    <div>
      <a href={props.href}>
        <div className="card bg-light" style={{ cursor: "pointer" }}>
          <img className="card-img" src={props.image} alt={props.name} />
          <div
            className="card-img-overlay h-100 d-flex flex-column justify-content-end"
            style={{ padding: 0 }}
          >
            <div className="row">
              <div className="col-12">
                <h5
                  className="card-title bg-info text-center mb-3"
                  style={{ padding: "5px" }}
                >
                  {props.name}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </a>

      <a href={props.github}>
        <div className="github-link">
          <div id="github-header">{props.name} Github Link</div>
        </div>
      </a>
    </div>
  );
}

export default PortfolioCard;

{
  /* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */
}
