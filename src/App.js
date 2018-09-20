import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Menu from "./Menu";
import { PageContent } from "./page-content";
import InfoButton from "./InfoButton";
import Notifications from "./Notifications";
import Popup from "./Popup";
import Purchase from "./Purchase";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      showNotification: false,
      citizenship: {
        local: 15,
        district: 0,
        regional: 10,
        national: 5,
        global: 15
      }
    };
  }

  logPurchase = (thingToUpdate) => {
    let newCitizenship = this.state.citizenship
    newCitizenship[thingToUpdate] += 5
    this.setState({ citizenship: newCitizenship })
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
  };

  render() {
    return (
      <div className="App">
        <PageContent logPurchase={this.logPurchase} citizenship={this.state.citizenship} loggedIn={this.setLoginState} />
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
