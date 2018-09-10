import "./App.css";
import Settings from "./Settings.js";
import InfoButton from "./InfoButton.js";
import React, { Component } from "react";
import Menu from "./Menu";
import BrandName from "./BrandName";
import "./Info.css";

export default class Info extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="grid">
        <InfoButton />
        <Settings />
        <Menu />
        <BrandName />
        <h4>Give Back, Get Rewards, Have Fun</h4>
        <div className="info-container">
          <p className="info-title">Information</p>
          <p>Inspired by: World Citizen, Justine Troyke</p>
          <p>Developed By</p>
          <p>Alex Bruce</p>
          <p>Nick Dambrosio</p>
        </div>
      </div>
    );
  }
}
