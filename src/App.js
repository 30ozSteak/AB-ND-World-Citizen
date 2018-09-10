import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Menu from "./Menu";
import { PageContent } from "./page-content";
import InfoButton from "./InfoButton";
import Notifications from "./Notifications";
import Icon from "./Icon";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <PageContent />
        <InfoButton />
        <Notifications />
        <Menu />
      </div>
    );
  }
}
