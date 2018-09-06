import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Menu from "./Menu";

// menu butts will live
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/play">Play</Link>
        </li>
        <li>
          <Link to="/social">Social</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/play" component={Play} />
      <Route path="/social" component={Social} />
    </div>
  </Router>
);

const Butt = () => (
  <div className="App">
    <Home />
    <Menu />
  </div>
);

const Play = () => (
  <div>
    <h2>Play</h2>
  </div>
);

const Social = ({ match }) => (
  <div>
    <h2>Social</h2>
    <Route path={`${match.url}/:topicId`} component={Social} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a social.</h3>}
    />
  </div>
);

export default BasicExample;
