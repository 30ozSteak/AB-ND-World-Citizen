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
          <p className="info-title">About Us</p>
          <p>Lead Engineer</p>
          <p>Justine Troyke</p>
          <p>Lead Developer</p>
          <p>Alex Bruce</p>
          <p>Lead Designer</p>
          <p>Nick Dambrosio</p>
        </div>
      </div>
    );
  }
}
