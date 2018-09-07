import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Menu from "./Menu";

// menu butts will live
const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/play" component={Play} />
      <Route path="/social" component={Social} />
    </div>
  </Router>
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}

export default App;
