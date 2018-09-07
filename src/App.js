import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Menu from "./Menu";
import Play from "./Play";
import Social from "./Social";
import { PageContent } from "./page-content";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <PageContent />
        <Menu />
      </div>
    );
  }
}
