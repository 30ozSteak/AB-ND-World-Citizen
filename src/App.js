import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Menu from "./Menu";
import { PageContent } from "./page-content";
import InfoButton from "./InfoButton";
import Notifications from "./Notifications";
import Popup from "./Popup";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      showNotification: false
    };
  }

  setLoginState = () => {
    this.setState({
      loggedIn: true
    });
  };

  displayNotification = () => {
    this.setState({
      showNotification: true
    });
    console.log("hello");
  };

  render() {
    return (
      <div className="App">
        <PageContent loggedIn={this.setLoginState} />
        {this.state.loggedIn && <InfoButton />}
        {this.state.showNotification && (
          <Popup displayNotification={this.showNotification} />
        )}
        {this.state.loggedIn && <Notifications />}
        {this.state.loggedIn && <Menu />}
      </div>
    );
  }
}
