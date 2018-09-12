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
          <p className="job-title">CTO</p>
          <p>Justine Troyke </p>
          <p className="job-title">Lead Developer</p>
          <p>Alex Bruce</p>
          <p className="job-title">Lead Designer</p>
          <p>Nick Dambrosio</p>
          <i class="fas fa-caret-down" />
          <p className="app-description">
            This app was inspired and directed by Justine Troyke. Visit her
            Github / Linkedin!
          </p>
          <a href="https://github.com/justinetroyke">
            <i class="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/justine-troyke/">
            <i class="fab fa-linkedin" />
          </a>
          <p />

          <NavLink to="/">
            <p className="log-out">Back</p>
          </NavLink>
        </div>
      </div>
    );
  }
}
