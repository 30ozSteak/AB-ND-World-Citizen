import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Menu from "./Menu";
import { PageContent } from "./page-content";
import InfoButton from "./InfoButton";
import Notifications from "./Notifications";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      showWelcomeMessage: true
    };
  }
  render() {
    if (!this.state.showWelcomeMessage) {
      return (
        <div className="App">
          <PageContent />
          <InfoButton />
          <Notifications />
          <Menu />
        </div>
      );
    }
    return (
      <div className="app">
        {this.state.showWelcomeMessage && <Welcome />}
        <Search
          setLocation={location => this.importLocation(location)}
          findHome={() => this.findHome()}
        />
      </div>
    );
  }
}
