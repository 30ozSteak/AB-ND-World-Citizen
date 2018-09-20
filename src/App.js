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

  setLoginState = () => {
    console.log("hi");
    this.setState({
      loggedIn: true
    });
    console.log("hey");
  };

  render() {
    return (
      <div className="App">
        <PageContent loggedIn={this.setLoginState} />
        {this.state.loggedIn && <InfoButton />}
        {this.state.loggedIn && <Notifications />}
        {this.state.loggedIn && <Menu />}
      </div>
    );
  }
}
