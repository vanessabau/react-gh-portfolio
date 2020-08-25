import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "../../../node_modules/react-router-dom";
import NavTabs from "../NavTabs/NavTabs";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

function NavBar() {
  return (
    <>
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </>
  );
}

export default NavBar;
