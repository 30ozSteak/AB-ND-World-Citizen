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
          <a href="https://github.com/justinetroyke">Github</a>
          <a href="https://www.linkedin.com/in/justine-troyke/">LinkedIn</a>
          <p className="job-title">Lead Developer</p>
          <p>Alex Bruce</p>
          <a href="https://github.com/Alexbruce1">Github</a>
          <a href="https://www.linkedin.com/in/alex-b-bruce/">LinkedIn</a>
          <p className="job-title">Lead Designer</p>
          <p>Nick Dambrosio</p>
          <a href="https://github.com/Alexbruce1">Github</a>
          <a href="https://www.linkedin.com/in/alex-b-bruce/">LinkedIn</a>
          <p className="app-description">
            This app was inspired and directed by Justine Troyke, a dedicated
            software engineer who aspires to encourage others towards the simple
            idea of Doing what you can, when you can.
          </p>
          <a href="https://www.linkedin.com/in/alex-b-bruce/" />
          <NavLink to="/">
            <p className="log-out">Back</p>
          </NavLink>
        </div>
      </div>
    );
  }
}
