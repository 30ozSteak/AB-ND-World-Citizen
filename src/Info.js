import "./App.css";
import InfoButton from "./InfoButton.js";
import React, { Component } from "react";
import BrandName from "./BrandName";
import "./Info.css";
import MiniGlobe from "./Miniglobe";
import { NavLink } from "react-router-dom";

export default class Info extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="grid">
        <BrandName />
        <div className="info-container">
          <p className="info-title">About Us</p>
          <div className="info-globe">
            {" "}
            <MiniGlobe />
          </div>
          <p className="job-title">Lead Engineer</p>
          <p>Justine Troyke </p>
          <p className="job-title">Lead Developer</p>
          <p>Alex Bruce</p>
          <p className="job-title">Lead Designer</p>
          <p>Nick Dambrosio</p>
          <NavLink to="/">
            <p className="log-out">Log out</p>
          </NavLink>
        </div>
      </div>
    );
  }
}
