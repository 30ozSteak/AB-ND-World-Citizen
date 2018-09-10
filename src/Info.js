import "./App.css";
import InfoButton from "./InfoButton.js";
import React, { Component } from "react";
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
        <BrandName />
        <h4>Give Back, Get Rewards, Have Fun</h4>
        <div className="info-container">
          <p className="info-title">About Us</p>
          <p>CTO</p>
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
